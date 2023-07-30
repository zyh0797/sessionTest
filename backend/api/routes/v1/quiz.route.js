import express from 'express';
import creators from '../../../data/quiz3.json';

const router = express.Router();

let quiz3Creators = creators;

const TAGS = [
  'mom',
  'baby',
  'child',
  'teenager',
  'adult',
  'senior',
  'model',
  'teacher',
  'actor',
  'actress',
  'singer',
  'musician',
  'painter',
];
const quiz4InfluencersBaseline = [];
for (let i = 0; i < 10000000; i++) {
  const randomTagIndex = Math.floor(Math.random() * TAGS.length);
  const influencer = {
    id: i,
    name: `name-${i}`,
    tag: TAGS[randomTagIndex],
  };
  quiz4InfluencersBaseline.push(influencer);
}

/* Use the data in `quiz4InfluencersBaseline` and create an optimized data structure for `quiz4Influencers` */
const quiz4Influencers = new Map();
for (const item of quiz4InfluencersBaseline) {
  const key = item.tag;
  if (quiz4Influencers.has(key)) {
    quiz4Influencers.get(key).push(item);
  } else {
    quiz4Influencers.set(key, [item]);
  }
}

router.route('/getQuiz3Creators').get((req, res) => {
  res.status(200).send(quiz3Creators);
});

router.route('/addNewQuiz3Creators').post((req, res) => {
  const { body } = req;
  const { newCreator } = body || {};
  // 正常情况下写入数据需要做一些数据是否存在等等的业务逻辑判断，此题并未提及，假设调用该接口的数据即可保存

  // 此题模拟只要将获取到的 newCreator 存入 quiz3Creators 中即为报仇成功；
  quiz3Creators.push(newCreator);

  res.status(200).send('ok');
});

router.route('/queryQuiz4CreatorsBaseline').get((req, res) => {
  const { query } = req;
  const { tag } = query || {};

  const start = new Date().getTime();

  const results = quiz4InfluencersBaseline.filter(
    (influencer) => influencer.tag === tag
  );

  const elapsed = new Date().getTime() - start;

  res.status(200).send({
    results,
    cost: `${elapsed}ms`,
  });
});

router.route('/queryQuiz4Creators').get((req, res) => {
  const { query } = req;
  const { tag } = query || {};

  const start = new Date().getTime();

  /* Quiz #4 - Optimized the lookup */
  const results = quiz4Influencers.get(tag);

  const elapsed = new Date().getTime() - start;
  res.status(200).send({
    results,
    cost: `${elapsed}ms`,
  });
});

// This is an example of how to handle a POST request
router.route('/postExample').post((req, res) => {
  const { body } = req;
  const { params } = body || {};
  res.status(200).send('ok');
});

export default router;
