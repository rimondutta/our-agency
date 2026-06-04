"use client";

import DarkClass from "../components/classes/DarkClass";
import LayoutV1 from "../components/layouts/LayoutV1";
import NotFoundContent from "../components/notFound/Error404Content";

export default function NotFound() {
  return (
    <LayoutV1>
      <NotFoundContent />
      <DarkClass />
    </LayoutV1>
  );
}
