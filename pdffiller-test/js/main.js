const init = () => {
    const app = document.querySelectorAll('.app');
    const param = {
        lines: [
            {
                background: '#00F',
                updateTime: 1000,
                elements: [
                    {
                        background: '#00F',
                        width: 25
                    }, {
                        background: '#00F',
                        width: 25
                    }
                ]
            }, {
                background: '#00F',
                updateTime: 2000,
                elements: [
                    {
                        background: '#00F',
                        width: 50
                    }
                ]
            }
        ]
    }
    const createSection = (el, bl, background, width) => {
        bl.append(el);
        el.style.width = width;
        el.style.background = background;
    }
    param.lines.map((el1) => {
        const line = document.createElement('div');
        createSection(line, app[0], el1.background, '100%');
        setInterval(() => {
            line.style.background = `#${Math.floor(Math.random() * 16777215).toString(16)}`
        }, el1.updateTime);

        el1.elements.map((el2) => {
            const section = document.createElement('div');
            createSection(section, line, el2.background, `${el2.width}%`)
        });
    });
}
document.addEventListener("DOMContentLoaded", () => init());
