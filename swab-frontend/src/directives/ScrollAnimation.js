const animatedScrollObserver = new IntersectionObserver(
    (entries, animatedScrollObserver) => { // callback-func for checking if the target is set on right element
        entries.forEach((entry) => { // check with a condition if all entries is in the curr viewport
            if (entry.isIntersecting) {// respectively IF the entry is intersecting with the viewport
                entry.target.classList.add('enter'); // and target the el with the specific class
                animatedScrollObserver.unobserve(entry.target);
            }
        })
    }
);

export default {
    bind(el) { // el is the element which will be animatetd
        el.classList.add('before-enter'); // adding css class to the element - check if the el is in the viewport
        animatedScrollObserver.observe(el);//intersection observer check the el is visible in the viewport - real time check
    }
}
