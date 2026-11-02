export const random = (max, min = 0) => {
    const num = max - min;
    return Math.ceil(Math.random() * num) + min;
};

export const countBtn = (count, $el) => {
    const text = $el.innerText;
    $el.innerText = `${text} (${count})`;

    return () => {
        count--;
        if (count === 0) {
            $el.disabled = true;
        }
        $el.innerText = `${text} (${count})`;
    };
};