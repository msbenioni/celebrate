import { NextResponse } from 'next/server';

// Mock database for uploaded files
const uploadedFiles: Array<{
  id: string;
  fileName: string;
  fileType: string;
  uploadDate: string;
  size: number;
  url: string;
  memorialId: string;
}> = [
  {
    id: '1',
    fileName: 'memory.jpg',
    fileType: 'image/jpeg',
    uploadDate: '2025-04-01T12:00:00Z',
    size: 1024000,
    url: '/uploads/memory.jpg',
    memorialId: '1'
  },
  {
    id: '2',
    fileName: 'speech.pdf',
    fileType: 'application/pdf',
    uploadDate: '2025-04-02T14:30:00Z',
    size: 512000,
    url: '/uploads/speech.pdf',
    memorialId: '1'
  }
];

// Get uploaded files for a specific memorial
export async function GET(request: Request) {
  const url = new URL(request.url);
  const memorialId = url.searchParams.get('memorialId');
  
  if (!memorialId) {
    return NextResponse.json({ error: 'Memorial ID is required' }, { status: 400 });
  }
  
  const files = uploadedFiles.filter(file => file.memorialId === memorialId);
  return NextResponse.json({ files });
}

// Handle file upload for a memorial
export async function POST(request: Request) {
  try {
    // In a real implementation, you would use formidable, multer, or similar
    // to handle multipart form data and store the file
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const memorialId = formData.get('memorialId') as string;
    
    if (!file || !memorialId) {
      return NextResponse.json({ 
        error: 'Missing required fields (file, memorialId)' 
      }, { status: 400 });
    }
    
    // In a real app, you would save the file to disk/cloud storage here
    // and generate a URL to access it
    
    // Create a mock file record
    const newFile = {
      id: `${Date.now()}`,
      fileName: file.name,
      fileType: file.type,
      uploadDate: new Date().toISOString(),
      size: file.size,
      url: `/uploads/${file.name}`, // This would be a real URL in production
      memorialId
    };
    
    // Add to our mock database
    uploadedFiles.push(newFile);
    
    return NextResponse.json({ 
      file: newFile,
      message: 'File uploaded successfully'
    }, { status: 201 });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ 
      error: 'Error uploading file' 
    }, { status: 500 });
  }
}
