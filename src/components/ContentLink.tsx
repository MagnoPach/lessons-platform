import { CaretRight, FileArrowDown } from "phosphor-react";
interface ContentLinkProps {
  title: string;
  text: string;
  link?: string;
}

export function ContentLink(props: ContentLinkProps) {
  return (
    <a
      href={props.link}
      className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors cursor-pointer"
    >
      <div className="bg-green-700 h-full p-6 flex items-center">
        <FileArrowDown size={40} />
      </div>
      <div className="py-6 leading-relaxed">
        <strong className="text-2xl">{props.title}</strong>
        <p className="text-sm text-gray-200 mt-2">{props.text}</p>
      </div>
      <div className="h-full p-6 flex items-center">
        <CaretRight size={24} />
      </div>
    </a>
  );
}
