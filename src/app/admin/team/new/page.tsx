'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase, storageConfig } from '@/lib/supabase';
import Link from 'next/link';

const ROLES = [
  { value: 'admin', label: 'Administrator' },
  { value: 'manager', label: 'Manager' },
  { value: 'engineer', label: 'Engineer' },
  { value: 'designer', label: 'Designer' },
  { value: 'user', label: 'Regular User' }
];

export default function NewTeamMemberPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    role: '',
    avatar_url: '',
    avatar: null as File | null
  });
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [avatarFile, setAvatarFile] = useState<File | null>(null);

  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    // Email validation
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    // Password validation
    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      errors.password = 'Password must contain at least one uppercase letter, one lowercase letter, and one number';
    }
    
    // First name validation
    if (!formData.first_name) {
      errors.first_name = 'First name is required';
    } else if (formData.first_name.length < 2) {
      errors.first_name = 'First name must be at least 2 characters long';
    }
    
    // Last name validation
    if (!formData.last_name) {
      errors.last_name = 'Last name is required';
    } else if (formData.last_name.length < 2) {
      errors.last_name = 'Last name must be at least 2 characters long';
    }
    
    // Role validation
    if (!formData.role) {
      errors.role = 'Role is required';
    } else if (!ROLES.some(r => r.value === formData.role)) {
      errors.role = 'Please select a valid role';
    }
    
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear validation error when user starts typing
    if (validationErrors[name]) {
      setValidationErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }

    const file = e.target.files[0];
    if (!file.type.startsWith('image/')) {
      setError('Please upload an image file');
      return;
    }

    setAvatarFile(file);
  };

  const uploadAvatar = async (userId: string): Promise<string | null> => {
    if (!avatarFile) return null;

    try {
      // Validate file type
      if (!storageConfig.allowedMimeTypes.includes(avatarFile.type)) {
        throw new Error('Invalid file type. Please upload a JPG, PNG, or GIF image.');
      }

      // Validate file size
      if (avatarFile.size > storageConfig.maxFileSize) {
        throw new Error('File size too large. Maximum size is 2MB.');
      }

      const fileExt = avatarFile.name.split('.').pop();
      const filePath = `avatars/${userId}.${fileExt}`;

      console.log('Uploading avatar to path:', filePath);

      // Upload the file
      const { error: uploadError, data: uploadData } = await supabase.storage
        .from(storageConfig.bucket)
        .upload(filePath, avatarFile, {
          cacheControl: '3600',
          upsert: true
        });

      if (uploadError) {
        console.error('Error uploading avatar:', uploadError);
        throw new Error(`Failed to upload avatar: ${uploadError.message}`);
      }

      console.log('Avatar uploaded successfully:', uploadData);

      // Get the public URL
      const { data: urlData } = supabase.storage
        .from(storageConfig.bucket)
        .getPublicUrl(filePath);

      if (!urlData?.publicUrl) {
        throw new Error('Failed to get public URL for avatar');
      }

      console.log('Avatar URL:', urlData.publicUrl);
      return urlData.publicUrl;
    } catch (error: any) {
      console.error('Error in uploadAvatar:', error);
      setError(error.message || 'Failed to upload avatar');
      return null;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form and return if there are errors
    if (!validateForm()) {
      console.log('Form validation failed:', validationErrors);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      console.log('Submitting form with data:', formData);
      
      // First create the user
      const response = await fetch('/api/admin/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          full_name: `${formData.first_name} ${formData.last_name}`,
          role: formData.role,
          avatar_url: formData.avatar_url,
        }),
      });

      const responseText = await response.text();
      console.log('Raw server response:', responseText);

      let data;
      try {
        data = responseText ? JSON.parse(responseText) : {};
      } catch (jsonError) {
        console.error('Error parsing JSON:', jsonError, 'Response text:', responseText);
        throw new Error(`Server returned invalid JSON: ${responseText}`);
      }

      if (!response.ok) {
        console.error('Server error:', {
          status: response.status,
          statusText: response.statusText,
          data,
          text: responseText
        });
        
        // Extract error message from various possible locations in the response
        const errorMessage = data?.details?.message || 
                           data?.error || 
                           data?.message ||
                           `Server error (${response.status}): ${response.statusText}`;
        throw new Error(errorMessage);
      }

      if (!data.success) {
        const errorMessage = data?.details?.message || 
                           data?.error || 
                           'Failed to create team member';
        throw new Error(errorMessage);
      }

      // If we have a file and user was created successfully, upload the avatar
      if (avatarFile && data.user?.id) {
        try {
          console.log('Uploading avatar for user:', data.user.id);
          const avatarUrl = await uploadAvatar(data.user.id);
          console.log('Avatar URL after upload:', avatarUrl);
          
          if (avatarUrl) {
            // Update the user's profile with the new avatar URL
            const updateResponse = await fetch(`/api/admin/users/${data.user.id}`, {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ avatar_url: avatarUrl }),
            });

            if (!updateResponse.ok) {
              console.error('Failed to update profile with avatar URL');
            }
          }
        } catch (uploadError) {
          console.error('Error uploading avatar:', uploadError);
          // Don't throw here, just log the error and continue
        }
      }

      router.push('/admin/team');
    } catch (err: any) {
      console.error('Error in handleSubmit:', err);
      setError(err.message || 'An error occurred while creating the team member');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Add Team Member</h2>
            <p className="mt-1 text-sm text-gray-500">
              Create a new team member account
            </p>
          </div>
          <div className="mt-4 flex md:mt-0 md:ml-4">
            <Link
              href="/admin/team"
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#e43d30]"
            >
              Cancel
            </Link>
          </div>
        </div>

        <div className="mt-8">
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8 bg-white shadow px-6 py-8 sm:rounded-lg">
              {error && (
                <div className="rounded-md bg-red-50 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-red-800">Error</h3>
                      <div className="mt-2 text-sm text-red-700">
                        <p>{error}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                {/* Avatar Upload Section */}
                <div className="sm:col-span-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="relative h-24 w-24 rounded-full overflow-hidden bg-gray-200">
                        {avatarFile ? (
                          <img
                            src={URL.createObjectURL(avatarFile)}
                            alt="Avatar preview"
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700">Profile Photo</label>
                      <div className="mt-1 flex items-center">
                        <label
                          htmlFor="avatar-upload"
                          className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#e43d30] cursor-pointer"
                        >
                          <svg className="-ml-1 mr-2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                          </svg>
                          Upload photo
                        </label>
                        <input
                          id="avatar-upload"
                          type="file"
                          className="sr-only"
                          accept="image/*"
                          onChange={handleFileChange}
                        />
                      </div>
                      <p className="mt-2 text-sm text-gray-500">
                        JPG, PNG or GIF. Max size of 2MB.
                      </p>
                    </div>
                  </div>
                </div>

                {/* First Name */}
                <div className="sm:col-span-3">
                  <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="first_name"
                      id="first_name"
                      value={formData.first_name}
                      onChange={handleChange}
                      className={`block w-full rounded-md shadow-sm sm:text-sm ${
                        validationErrors.first_name
                          ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
                          : 'border-gray-300 focus:ring-[#e43d30] focus:border-[#e43d30]'
                      }`}
                    />
                    {validationErrors.first_name && (
                      <p className="mt-2 text-sm text-red-600">{validationErrors.first_name}</p>
                    )}
                  </div>
                </div>

                {/* Last Name */}
                <div className="sm:col-span-3">
                  <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="last_name"
                      id="last_name"
                      value={formData.last_name}
                      onChange={handleChange}
                      className={`block w-full rounded-md shadow-sm sm:text-sm ${
                        validationErrors.last_name
                          ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
                          : 'border-gray-300 focus:ring-[#e43d30] focus:border-[#e43d30]'
                      }`}
                    />
                    {validationErrors.last_name && (
                      <p className="mt-2 text-sm text-red-600">{validationErrors.last_name}</p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className="sm:col-span-3">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`block w-full rounded-md shadow-sm sm:text-sm ${
                        validationErrors.email
                          ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
                          : 'border-gray-300 focus:ring-[#e43d30] focus:border-[#e43d30]'
                      }`}
                    />
                    {validationErrors.email && (
                      <p className="mt-2 text-sm text-red-600">{validationErrors.email}</p>
                    )}
                  </div>
                </div>

                {/* Password */}
                <div className="sm:col-span-3">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      value={formData.password}
                      onChange={handleChange}
                      className={`block w-full rounded-md shadow-sm sm:text-sm ${
                        validationErrors.password
                          ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
                          : 'border-gray-300 focus:ring-[#e43d30] focus:border-[#e43d30]'
                      }`}
                    />
                    {validationErrors.password && (
                      <p className="mt-2 text-sm text-red-600">{validationErrors.password}</p>
                    )}
                    {formData.password && !validationErrors.password && (
                      <div className="mt-2">
                        <div className="flex items-center space-x-2">
                          <div className={`h-1.5 w-1/3 rounded-full ${
                            formData.password.length >= 8 ? 'bg-green-500' : 'bg-gray-200'
                          }`}></div>
                          <div className={`h-1.5 w-1/3 rounded-full ${
                            /[A-Z]/.test(formData.password) ? 'bg-green-500' : 'bg-gray-200'
                          }`}></div>
                          <div className={`h-1.5 w-1/3 rounded-full ${
                            /\d/.test(formData.password) ? 'bg-green-500' : 'bg-gray-200'
                          }`}></div>
                        </div>
                        <p className="mt-1 text-xs text-gray-500">
                          Password strength indicator
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Role */}
                <div className="sm:col-span-3">
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                    Role
                  </label>
                  <div className="mt-1">
                    <select
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className={`block w-full rounded-md shadow-sm sm:text-sm ${
                        validationErrors.role
                          ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
                          : 'border-gray-300 focus:ring-[#e43d30] focus:border-[#e43d30]'
                      }`}
                    >
                      <option value="">Select a role</option>
                      {ROLES.map((role) => (
                        <option key={role.value} value={role.value}>
                          {role.label}
                        </option>
                      ))}
                    </select>
                    {validationErrors.role && (
                      <p className="mt-2 text-sm text-red-600">{validationErrors.role}</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="pt-5">
                <div className="flex justify-end">
                  <Link
                    href="/admin/team"
                    className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#e43d30]"
                  >
                    Cancel
                  </Link>
                  <button
                    type="submit"
                    disabled={loading}
                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#e43d30] hover:bg-[#c63529] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#e43d30] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Creating...
                      </>
                    ) : (
                      'Create Team Member'
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}