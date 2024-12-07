import cl from "./scroll.module.css";

export default function Scroll({ line }) {
    return (
        <div className={cl.scroll}>
            {/* Прокручиваемая лента с двумя наборами текста (дублируем) */}
            <div>
                {" "}
                {line?.map((item, index) => (
                    <span key={index}>{item}</span>
                ))}
                {line?.map((item, index) => (
                    <span key={index}>{item}</span>
                ))}
                {line?.map((item, index) => (
                    <span key={index}>{item}</span>
                ))}
                {line?.map((item, index) => (
                    <span key={index}>{item}</span>
                ))}
                {line?.map((item, index) => (
                    <span key={index}>{item}</span>
                ))}
                {line?.map((item, index) => (
                    <span key={index}>{item}</span>
                ))}
                {line?.map((item, index) => (
                    <span key={index}>{item}</span>
                ))}
                {line?.map((item, index) => (
                    <span key={index}>{item}</span>
                ))}
                {line?.map((item, index) => (
                    <span key={index}>{item}</span>
                ))}
            </div>
            <div>
                <span>MarketingStark</span>
                <span>MarketingStark</span>
                <span>MarketingStark</span>
                <span>MarketingStark</span>
                <span>MarketingStark</span>
                <span>MarketingStark</span>
                <span>MarketingStark</span>
                <span>MarketingStark</span>
                <span>MarketingStark</span>
                <span>MarketingStark</span>
                <span>MarketingStark</span>
                <span>MarketingStark</span>
                <span>MarketingStark</span>
                <span>MarketingStark</span>
            </div>
        </div>
    );
}
