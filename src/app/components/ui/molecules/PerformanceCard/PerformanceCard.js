import { BigCard } from "../Cards/Card.styles";
import { Text } from "../../atoms/Text/Text.styles";
import { Image } from "../../atoms/Images/Images.styles";
import { PerformanceContainer, BigText, ArrowDiv, ProgressFlex, ProgressbarFlex } from "./PerformanceCard.styles";
import prev from "../../../assets/img/prev.svg";
import next from "../../../assets/img/next.svg";
import { Progress, GreenProgress, RedProgress } from "../../atoms/ProgressBar/ProgressBar.styles";

const PerformanceCard = () => {
    return (
        <PerformanceContainer>
            <BigCard>
                <BigText>Average Performance <br /> by Stack</BigText>
                <ArrowDiv>
                    <Image width= "15px" src={prev} alt="" />
                    <Text color= "#3438538A" fontSize= "15px" >Squad 1</Text>
                    <Image width= "15px" src={next} alt="" />
                </ArrowDiv>
                <div>
                    <ProgressFlex>
                        <Text fontSize="15px">Java</Text>
                            <ProgressbarFlex>
                                <Progress>
                                    <GreenProgress />
                                </Progress>
                                <Text fontSize="13px">75</Text>
                            </ProgressbarFlex>
                    </ProgressFlex>
                    <ProgressFlex>
                        <Text fontSize="15px">C#</Text>
                            <ProgressbarFlex>
                                <Progress>
                                    <GreenProgress />
                                </Progress>
                                <Text fontSize="13px">75</Text>
                            </ProgressbarFlex>
                    </ProgressFlex>
                    
                    <ProgressFlex>
                        <Text fontSize="15px">Android</Text>
                        <ProgressbarFlex>
                            <Progress>
                                <GreenProgress />
                            </Progress>
                            <Text fontSize="13px">75</Text>
                        </ProgressbarFlex>
                    </ProgressFlex>
                    <ProgressFlex>
                        <Text fontSize="15px">Node JS</Text>
                        <ProgressbarFlex>
                            <Progress>
                                <RedProgress />
                            </Progress>
                            <Text fontSize="13px">43</Text>
                        </ProgressbarFlex>
                    </ProgressFlex>
                    <ProgressFlex>
                        <Text fontSize="15px">Python</Text>
                        <ProgressbarFlex>
                            <Progress>
                                <RedProgress />
                            </Progress>
                            <Text fontSize="13px">43</Text>
                        </ProgressbarFlex>
                    </ProgressFlex>
                </div>
            </BigCard>
        </PerformanceContainer>
    )
}

export default PerformanceCard
