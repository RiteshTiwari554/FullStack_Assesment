import "./temp.css";
import Image from "next/image";

const Temp = (
{
  clsdesc,
  ttl,
  desc,
  img 
}
) => {
  return (
    <main className="gp60">
        <Image className="gpImg" src={img} alt="gpImg"/>
        <h3 className="gpttl">{ttl}</h3>
        {(clsdesc)?<h3 className={clsdesc}>{desc}</h3>:<h3 className="gpdesc">{desc}</h3> }
        <div className="gpread">
          <h3>READ</h3>
        </div>
    </main>
  )
}

export default Temp;