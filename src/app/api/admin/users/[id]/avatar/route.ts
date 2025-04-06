import { NextResponse } from 'next/server';
import { supabaseAdmin, storageConfig } from '@/lib/supabase';

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    if (!supabaseAdmin) {
      throw new Error('Supabase client not initialized');
    }

    const formData = await request.formData();
    const file = formData.get('avatar') as File;

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    // Validate file type
    if (!storageConfig.allowedMimeTypes.includes(file.type)) {
      return NextResponse.json(
        { error: 'Invalid file type. Please upload a JPG, PNG, or GIF image.' },
        { status: 400 }
      );
    }

    // Validate file size
    if (file.size > storageConfig.maxFileSize) {
      return NextResponse.json(
        { error: 'File size too large. Maximum size is 2MB.' },
        { status: 400 }
      );
    }

    const fileExt = file.name.split('.').pop();
    const filePath = `avatars/${params.id}.${fileExt}`;

    // Upload the file
    const { error: uploadError } = await supabaseAdmin.storage
      .from(storageConfig.bucket)
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: true
      });

    if (uploadError) {
      console.error('Error uploading avatar:', uploadError);
      return NextResponse.json(
        { error: `Failed to upload avatar: ${uploadError.message}` },
        { status: 500 }
      );
    }

    // Get the public URL
    const { data: urlData } = supabaseAdmin.storage
      .from(storageConfig.bucket)
      .getPublicUrl(filePath);

    if (!urlData?.publicUrl) {
      return NextResponse.json(
        { error: 'Failed to get public URL for avatar' },
        { status: 500 }
      );
    }

    // Update the profile with the new avatar URL
    const { error: updateError } = await supabaseAdmin
      .from('profiles')
      .update({ avatar_url: urlData.publicUrl })
      .eq('id', params.id);

    if (updateError) {
      console.error('Error updating profile:', updateError);
      return NextResponse.json(
        { error: `Failed to update profile: ${updateError.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json({ avatar_url: urlData.publicUrl });
  } catch (error: any) {
    console.error('Error in avatar update:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to update avatar' },
      { status: 500 }
    );
  }
} 