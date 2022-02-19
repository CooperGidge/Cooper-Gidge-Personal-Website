module.exports = (authors,label) => {
    let author = authors.filter(a => a.key === label)[0];
    return author;
};