
import { useLoaderData, useParams } from 'react-router-dom'
import LessonCard from '../components/LessonCard';

const Lesson = () => {
    const lessonData = useLoaderData();
    const {id} =useParams()

  return (
    <div className='w-11/12 mx-auto py-10 px-6'>
      <h1 className='text-center text-2xl lg:text-4xl font-semibold text-[#172566] mb-10'>Lesson No : {id}</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {
            lessonData.map(lesson=><LessonCard key={lesson.id} lesson={lesson} />)
        }
      </div>
    </div>
  )
}

export default Lesson
