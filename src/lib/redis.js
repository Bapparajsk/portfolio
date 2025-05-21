import Ioredis from 'ioredis'

const redis = new Ioredis({
    username: 'default',
    password: '4WfeQJPFxCZt9vEWMpYaMo7SqPbXkkrR',
    host: 'redis-13536.c322.us-east-1-2.ec2.redns.redis-cloud.com',
    port: 13536
});

redis.on("error", () => {
    console.log('Redis connection failed ❌');
});

redis.on("connect", () => {
    console.log('Redis Connected Successfully 🚀');
});

export { redis }

