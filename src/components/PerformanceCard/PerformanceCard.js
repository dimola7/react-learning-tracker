import cardStyles from "./PerformanceCard.module.css";
import prev from "../../assets/prev.svg";
import next from "../../assets/next.svg";

const PerformanceCard = () => {
    return (
        <div className={cardStyles.performanceBody}>
            <div className={cardStyles.performance}>
            <div className={cardStyles.performanceCard}>
                <h2>Average Performance <br /> by Stack</h2>
                <div className={cardStyles.arrows}>
                    <img src={prev} alt="" />
                    <p>Squad 1</p>
                    <img src={next} alt="" />
                </div>
                <div className={cardStyles.progress}>
                    <div className={cardStyles.progressFlex}>
                        <p>Java</p>
                        <div className={cardStyles.progressbarFlex}>
                        <div className={cardStyles.progressbar}>
                            <div></div>
                        </div>
                        <p>75</p>
                    </div>
                    </div>
                    <div className={cardStyles.progressFlex}>
                        <p>C#</p>
                        <div className={cardStyles.progressbarFlex}>
                        <div className={cardStyles.progressbar}>
                            <div></div>
                        </div>
                        <p>75</p>
                    </div>
                    </div>
                    <div className={cardStyles.progressFlex}>
                        <p>Android</p>
                        <div className={cardStyles.progressbarFlex}>
                        <div className={cardStyles.progressbar}>
                            <div></div>
                        </div>
                        <p>75</p>
                    </div>
                    </div>
                    <div className={cardStyles.progressFlex}>
                        <p>Node JS</p>
                        <div className={cardStyles.progressbarFlex}>
                            <div className={cardStyles.progressbarRed}>
                                <div></div>
                            </div>
                            <p>43</p>
                        </div>
                    </div>
                    <div className={cardStyles.progressFlex}>
                        <p>Python</p>
                        <div className={cardStyles.progressbarFlex}>
                            <div className={cardStyles.progressbarRed}>
                                <div></div>
                            </div>
                            <p>43</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default PerformanceCard
