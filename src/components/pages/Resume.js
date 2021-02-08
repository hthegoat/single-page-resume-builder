import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectLayout } from "../features/layout/layoutSlice";

import Separator from "../atoms/Separator";
import ShortDescription from "../molecules/ShortDescription";
import ListDescription from "../molecules/ListDescription";
import RatedDescription from "../features/ratedDescription/RatedDescription";
import NonRatedDescription from "../organisms/NonRatedDescription";
import Education from "../organisms/Education";
import Introduction from "../organisms/Introduction";
import Experience from "../organisms/Experience";

import { MdWork } from "react-icons/md";
import { MdVpnKey } from "react-icons/md";
import { MdVerifiedUser } from "react-icons/md";

import { MdPermIdentity } from "react-icons/md";
import { AiOutlineAim } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import { GrStatusGood } from "react-icons/gr";
import { IoGitBranch } from "react-icons/io5";
import { MdBuild } from "react-icons/md";
import { FaUniversity } from "react-icons/fa";

import data from "../../data.json";

const GridContainer = styled.div`
  padding: 50px;
  width: 1140px;
  margin: auto;
  background-color: white;
  display: grid;
  grid-template-columns: 2fr 10px 1fr;
  ${(props) => props}
`;

const Divider = styled.div`
  height: 100%;
  max-width: 3px;
  background-color: #007bff;
`;

const GridColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default function Resume() {
  const columns = useSelector(selectLayout);
  const resumeColumn1 = columns["column1"].list;
  const resumeColumn2 = columns["column2"].list;

  const sectionMap = new Map();
  sectionMap.set("Introduction", <Introduction name={data.name} role={data.role} personalDetails={data.personal_details} />);
  sectionMap.set("Experience", <Experience title={data.companyDetails.title} Icon={MdWork} companyList={data.companyDetails.companyList} />);
  sectionMap.set("Projects", <ListDescription title={data.key_projects.title} Icon={MdVpnKey} description={data.key_projects.description} />);
  sectionMap.set(
    "Certificates",
    <ListDescription title={data.certificates.title} Icon={MdVerifiedUser} description={data.certificates.description} />
  );

  sectionMap.set("Summary", <ShortDescription title={data.summary.title} Icon={MdPermIdentity} description={data.summary.description} />);
  sectionMap.set("Objective", <ShortDescription title={data.career.title} Icon={AiOutlineAim} description={data.career.description} />);
  sectionMap.set("Skills", <RatedDescription title={data.skills.title} Icon={BsBook} description={data.skills.description} />);
  sectionMap.set("Expertise", <NonRatedDescription title={data.expertise.title} Icon={GrStatusGood} description={data.expertise.description} />);
  sectionMap.set("Methodology", <NonRatedDescription title={data.methodology.title} Icon={IoGitBranch} description={data.methodology.description} />);
  sectionMap.set("Tools", <NonRatedDescription title={data.tools.title} Icon={MdBuild} description={data.tools.description} />);
  sectionMap.set("Education", <Education title={data.education.title} Icon={FaUniversity} description={data.education.description} />);

  return (
    <GridContainer style={{ gridTemplateColumns: `${columns["column1"].width}% 10px ${columns["column2"].width}%` }}>
      <GridColumn>
        {resumeColumn1.map((sectionName) => (
          <div key={sectionName}>{sectionMap.get(sectionName)}</div>
          // <Separator />
        ))}
      </GridColumn>

      <Divider />

      <GridColumn>
        {resumeColumn2.map((sectionName) => (
          <div key={sectionName}>{sectionMap.get(sectionName)}</div>
          // <Separator />
        ))}
      </GridColumn>
    </GridContainer>
  );
}
