import cardStyles from "./StackCards.module.css";
import java from "../../assets/java.svg";
import csharp from "../../assets/csharp.svg";
import android from "../../assets/android.svg";
import node from "../../assets/nodejs.svg";
import python from "../../assets/python.jpg"

const StackCards = () => {
    return (
        <div>
            <div className={cardStyles.languageCards}>
            <div className={cardStyles.stack}>
                <img src={java} alt="java" />
                <p>Java</p>
                <h1>80</h1>
                <h4>Students</h4>
            </div>
            <div className={cardStyles.stack}>
                <img src={csharp} alt="csharp" />
                <p>C#</p>
                <h1>50</h1>
                <h4>Students</h4>
            </div>
            <div className={cardStyles.stack}>
                <img src={android} alt="android" />
                <p>Android</p>
                <h1>40</h1>
                <h4>Students</h4>
            </div>
            <div className={cardStyles.stack}>
                <img src={node} className={node} alt="node" />
                <p>Node JS</p>
                <h1>20</h1>
                <h4>Students</h4>
            </div>
            <div className={cardStyles.stack}>
                <img src={python} alt="python" />
                <p>Python</p>
                <h1>90</h1>
                <h4>Students</h4>
            </div>
        </div>
        </div>
    )
}

export default StackCards
