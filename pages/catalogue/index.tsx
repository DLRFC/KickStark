import type { NextPage } from "next";
import Header from "../../components/header";
import { supabase } from "../../utils/supabase";
import Card from "../../components/projects/Card";

type Project = {
  id: number,
  name: string,
  login: string,
  loginType: string,
  repository: string,
  network: string,
  category1: string,
  category2: string,
  image: string,
  description: string,
  active: boolean
}

type Props = {
  projects: Project[]
}

const FullCatalogue: NextPage<Props> = (props) => {
  const { projects } = props

  return (
    <div className="w-screen h-screen circuitBoard">
      <Header title="catalogue" />
      <div className="w-full text-right pr-[20%] pt-2 pb-6 text-brand-gray opacity-[70%] text-md ">
        <p>Select any project to view details. </p>
      </div>

      <div className="grid grid-cols-3 w-full px-[8%] pb-[8%] justify-items-center">
        {projects.map((project: Project) => {
          return (
            <Card
              id={project.id}
              name={project.name}
              network={project.network}
              category1={project.category1}
              category2={project.category2}
              image={project.image}
              description={project.description}
              active={project.active}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FullCatalogue;

export async function getServerSideProps() {
  const { data } = await supabase.from("projects").select();

  return {
    props: {
      projects: data,
    },
  };
}
