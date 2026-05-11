import {
    j as e
} from "./framer-C_Gpxhjm.js";
import {
    S as o
} from "./star-BKfapDvZ.js";
import "./index-DGn1on1U.js";
import "./recharts-C2k-4Gok.js";
import "./radix-2-YDU1c1.js";
const s = [{
    quote: "Daniel Kim worked on our case and we are very happy with the service from his firm throughout the process. Being in an accident for the first time I had many questions and searching the Internet it only made the process that much more confusing. I went to Yelp to see what it had to offer and found Daniel Kim. I sent a message on a Sunday and, boom, we were on the phone talking. From that point Daniel was always accommodating. He even found people we can work with that speak Chinese for my wife. This was a huge plus for me. As we came closer to the end of the process Daniel's team kicked into high gear. They helped us through the end and did an excellent job of keeping in touch via email, text, and phone calls. I would highly recommend working with Daniel. Being in an accident is a stressful situation and he made things right. Thank you and your team! Thanks Daniel!",
    name: "Robert B."
}, {
    quote: "Daniel Kim is not only an excellent personal injury attorney but he's also a wonderful person!! He took care of everything for me after a small car accident that I had. He took the time to make sure that I was taken care of and treated me with immense respect. The best thing about him is that he is very knowledgeable in all the aspects of motor vehicle accidents. He has a lot of experience and success in this field. I now refer him to my family and friends because I know he will give top notch care and I trust him completely. I can't express this in words what a great help he was after the accident. He knew an amazing chiropractor near me. My best interests were definitely well cared for. I don't think I would have gotten the settlement if it were to be handled by anyone else. He is without a doubt the best!! He is also extremely methodical and quick. I love the fact that he just sent me this check when I needed it the most!",
    name: "Jody H."
}];

function c() {
    return e.jsxs("section", {
        className: "py-12 px-4 border-t border-border",
        children: [e.jsx("h2", {
            className: "text-xl font-bold text-foreground text-center mb-10",
            children: "Real Outcomes."
        }), e.jsx("div", {
            className: "max-w-2xl mx-auto flex flex-col gap-8",
            children: s.map((t, a) => e.jsxs("div", {
                className: "flex-1",
                children: [e.jsx("div", {
                    className: "text-5xl font-serif leading-none mb-3",
                    style: {
                        color: "#01B2FF"
                    },
                    children: '"'
                }), e.jsxs("p", {
                    className: "text-sm text-muted-foreground leading-relaxed mb-4",
                    children: ['"', t.quote, '"']
                }), e.jsx("p", {
                    className: "font-semibold text-foreground text-sm",
                    children: t.name
                }), e.jsx("div", {
                    className: "flex gap-0.5 mt-1",
                    children: [...Array(5)].map((i, n) => e.jsx(o, {
                        className: "w-4 h-4",
                        style: {
                            fill: "#01B2FF",
                            color: "#01B2FF"
                        }
                    }, n))
                })]
            }, a))
        })]
    })
}
export {
    c as
    default
};