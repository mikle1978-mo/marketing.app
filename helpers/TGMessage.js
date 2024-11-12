const TGMessage = function (data) {
    if (typeof data !== "object" || data === null) return;

    let message = `<b>Заявка с сайта MStark!</b>\n`;

    for (const [key, value] of Object.entries(data)) {
        message += `<b>${key}: </b>${value || "Не указан"}\n`;
    }

    fetch(process.env.URI_API_TG, {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
            chat_id: process.env.CHAT_ID,
            parse_mode: "html",
            text: message,
        }),
    })
        .then(() => {
            console.log("Запрос отправлен. Спасибо за обращение!");
        })
        .catch(() => {
            console.log("Ошибка при отправке запроса! Попробуйте позже.");
        });
};

export default TGMessage;
