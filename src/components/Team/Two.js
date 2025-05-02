import Image from "next/image";
import Link from "next/link";

export default function SingleTeamTwo(props) {
  const { teamClass, Slug, Img, Teacher, Designation, imgWidth, imgHeight } =
    props;

  return (
    <div className={teamClass ? teamClass : "it-team-3-item text-center"}>
      <Link href={`/profile-dosen/${Slug ? Slug : "details"}`}>
        <div className="it-team-3-thumb fix">
          <Image
            src={Img ? Img : "/img/team/team-3-1.jpg"}
            alt=""
            width={imgWidth ? imgWidth : 309}
            height={imgHeight ? imgHeight : 357}
            style={{ height: "auto" }}
          />
        </div>
        <div className="it-team-3-content">
          <div className="it-team-3-author-box">
            <h4 className="it-team-3-title">
              {Teacher ? Teacher : "Nathan Allen"}
            </h4>
            <span>{Designation ? Designation : "Teacher"}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
