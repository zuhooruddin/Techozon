import { db } from '../../../firebase';
import { doc, getDoc } from 'firebase/firestore';
export const metadata = {
  title: 'Detail',
};

export default async function BlogDetailPage({ params }) {
  const { id } = params;
  const docRef = doc(db, 'blogs', id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return <div>Blog not found</div>;
  }

  const blog = docSnap.data();

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 py-12">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-8">
            
          <h1 className="text-4xl font-bold text-center mb-8 text-indigo-900">{blog.title}</h1>
          <p className="text-gray-700">{blog.content}</p>
        </div>
      </div>
    </div>
  );
}
