module.exports = {
  dataCreateMessage: (data) => {
    return `${data} created successfully`;
  },
  dataListingMessage: (data) => {
    return `Listing all ${data}`;
  },
  dataUpdatingMessage: (data) => {
    return `${data} updated successfully`;
  },
};
