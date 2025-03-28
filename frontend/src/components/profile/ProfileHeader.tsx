import Image from "next/image";
import ProfilePic from "../../assets/profile.png";
import CompanyLogo from "../../assets/companyLogo.png";
import ProTag from "../../assets/Pro.png";
import Shield from "../../assets/ShieldCheck.png";

interface IProps {
  companyBanner?: string;
  companyLogo?: string;
  title: string;
  revenue?: string;
  employees?: string;
  companyYears?: string;
}

const ProfileHeader = ({ companyLogo, title, revenue, employees, companyYears }: IProps) => {
  return (
    <div className="mx-auto">
      <Image alt="companyProfilePic" className="mx-auto" src={ProfilePic} />
      <Image alt="companyLogo" className="pl-3 mt-[-2rem]" height={80} width={80} src={companyLogo || CompanyLogo} />
      <div className="flex flex-col">
        <div className="flex items-center justify-start px-3 h-[31px]">
            <h2 className="mr-2 text-2xl font-bold">{title}</h2>
            <Image alt="Shield" className="mr-1" width={24} height={24} src={Shield} />
            <Image alt="proTag" width={24} height={24} src={ProTag} />
        </div>
        <div className="flex gap-x-2 px-3 text-sm font-normal text-grayCustom">
            <p>{revenue} {" "}Revenue</p>
            <p>&#x2022; {" "} {employees} {" "}Employees</p>
            <p>&#x2022; {" "} {companyYears} {" "}Years</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
