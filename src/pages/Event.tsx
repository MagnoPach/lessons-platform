import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
  const { slug } = useParams<{ slug: string }>();
  let navigate = useNavigate();
  const [firstItemSlug, setFirstItemSlug] = useState<string>("");

  useEffect(() => {
    if (firstItemSlug) {
      navigate(`/event/lesson/${firstItemSlug}`, { replace: true });
    }
  }, [firstItemSlug]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {slug ? <Video lessonSlug={slug} /> : <div className="flex-1"></div>}

        <Sidebar setFirstItemSlug={setFirstItemSlug} />
      </main>
    </div>
  );
}
