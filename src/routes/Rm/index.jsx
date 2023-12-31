import foto_douglas from "../../imgs/douglas.png";
import foto_pedro from "../../imgs/pedro.png";
import foto_marcelo from "../../imgs/marcelo.png";
import foto_gabriel from "../../imgs/gabriel.png";
import "./rm.css";

export default function Rm() {
  return (
    <main>
      <div className="adjustment-imgs-rm">
      <div className="picture-container">
        <div className="polaroid" polaroid-caption="Douglas Rocha RM: 99055">
          <img
            className="background-rm"
            src={foto_douglas}
            alt="foto douglas"
          />
        </div>
      </div>
      <div className="picture-container">
        <div className="polaroid" polaroid-caption="Pedrinho Duarte RM: 98469 ">
          <img
            className="background-rm1"
            src={foto_pedro}
            alt="foto pedro"
          />
        </div>
      </div>
      <div className="picture-container">
        <div className="polaroid" polaroid-caption="Marcelo Fortes RM: 97706">
          <img
            className="background-rm2"
            src={foto_marcelo}
            alt="foto marcelo"
          />
        </div>
      </div>
      <div className="picture-container">
        <div className="polaroid" polaroid-caption="Gabriel Caverzan RM: 5511322">
          <img
            className="background-rm3"
            src={foto_gabriel}
            alt="foto gabriel"
          />
        </div>
      </div>
      </div>
    </main>
  );
}
