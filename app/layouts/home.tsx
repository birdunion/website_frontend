import { Outlet } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Bird Union - CWA Local 1180" },
    {
      name: "description",
      content: "Future Home of the Strike Shrike!",
    },
  ];
}

const HomeLayout = () => {
  return (
    <>
      <section className="max-w-6xl mx-auto px-6 my-8">
        <Outlet />
      </section>
    </>
  );
};

export default HomeLayout;
