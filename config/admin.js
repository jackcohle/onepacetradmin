module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'aeb7d5c49e35f4179c80d1b13f4db954'),
  },
});
