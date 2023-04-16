export const Errors = {
  cardNotFound: expect.objectContaining({
    status: 404,
    statusText: 'Not Found',
    data: 'The requested resource was not found.',
  }),
};
