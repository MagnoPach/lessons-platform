import { useEffect } from "react";
import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";

interface SideBarProps {
  setFirstItemSlug: Function;
}

export function Sidebar(props: SideBarProps) {
  const { data } = useGetLessonsQuery();

  useEffect(() => {
    if (data) {
      props.setFirstItemSlug(data.lessons[0].slug);
    }
  }, [data]);

  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 broder-b border-gray-500 block">
        Cronograma de aulas
      </span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map((lesson) => {
          return (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
            />
          );
        })}
      </div>
    </aside>
  );
}
