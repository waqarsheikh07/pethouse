module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '93e103a1fb876ea99273be1211601247'),
  },
});
