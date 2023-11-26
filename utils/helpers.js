// Exporting an object with a single method called format_date
module.exports = {
    // Method to format a date
    format_date: date => {
        // Creating a new Date object from the provided date and formatting it as "MM/DD/YYYY"
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
    },
};
