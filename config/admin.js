module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5d050e0940974c7f1e5c892ce5f8ce1e'),
  },
});
