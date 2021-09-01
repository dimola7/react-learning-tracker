import { BigCard } from "../ui/molecules/Cards/Cards.styles";
import { Text } from "../ui/atoms/Texts/Texts.styles";
import cardStyles from "./PerformanceCard.module.css";
import prev from "../../assets/prev.svg";
import next from "../../assets/next.svg";
import { Progress, GreenProgress, RedProgress } from "../ui/atoms/ProgressBar/ProgressBar.styles";

const PerformanceCard = () => {
    return (
        <div className={cardStyles.performanceBody}>
            <div className={cardStyles.performance}>
            <BigCard className={cardStyles.performanceCard}>
                <h2>Average Performance <br /> by Stack</h2>
                <div className={cardStyles.arrows}>
                    <img src={prev} alt="" />
                    <Text color= "#3438538A" fontSize= "15px" >Squad 1</Text>
                    <img src={next} alt="" />
                </div>
                <div className={cardStyles.progress}>
                    <div className={cardStyles.progressFlex}>
                        <p>Java</p>
                        <div className={cardStyles.progressbarFlex}>
                        <Progress>
                            <GreenProgress />
                        </Progress>
                        <p>75</p>
                    </div>
                    </div>
                    <div className={cardStyles.progressFlex}>
                        <p>C#</p>
                        <div className={cardStyles.progressbarFlex}>
                        <Progress>
                            <GreenProgress />
                        </Progress>
                        <p>75</p>
                    </div>
                    </div>
                    
                    <div className={cardStyles.progressFlex}>
                        <p>Android</p>
                        <div className={cardStyles.progressbarFlex}>
                        <Progress>
                            <GreenProgress />
                        </Progress>
                        <p>75</p>
                    </div>
                    </div>
                    <div className={cardStyles.progressFlex}>
                        <p>Node JS</p>
                        <div className={cardStyles.progressbarFlex}>
                        <Progress>
                            <RedProgress />
                        </Progress>
                            <p>43</p>
                        </div>
                    </div>
                    <div className={cardStyles.progressFlex}>
                        <p>Python</p>
                        <div className={cardStyles.progressbarFlex}>
                        <Progress>
                            <RedProgress />
                        </Progress>
                            <p>43</p>
                        </div>
                    </div>
                </div>
            </BigCard>
        </div>
        </div>
    )
}

export default PerformanceCard
