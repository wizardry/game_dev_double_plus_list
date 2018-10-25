const releaseContents = [ // 内容解放条件（職業Lv+教育）
  { contents_id: 0, job_id: 0, job_lv: 1, training_id: 5, },
  { contents_id: 1, job_id: 0, job_lv: 2, training_id: 5, },
  { contents_id: 2, job_id: 4, job_lv: 1, training_id: 5, },
  { contents_id: 3, job_id: 1, job_lv: 2, training_id: 1, },
  { contents_id: 4, job_id: 0, job_lv: 2, training_id: 6, },
  { contents_id: 5, job_id: 1, job_lv: 2, training_id: 5, },
  { contents_id: 6, job_id: 0, job_lv: 2, training_id: 4, },
  { contents_id: 7, job_id: 1, job_lv: 2, training_id: 1, },
  { contents_id: 8, job_id: 0, job_lv: 0, training_id: null, },
  { contents_id: 9, job_id: 5, job_lv: 1, training_id: 5, },
  { contents_id: 10, job_id: 1, job_lv: 3, training_id: 9, },
  { contents_id: 11, job_id: 4, job_lv: 3, training_id: 12, },
  { contents_id: 12, job_id: 2, jov_lv: 2, training_id: 0, },
  { contents_id: 13, job_id: 0, job_lv: 0, training_id: null, },
  { contents_id: 14, job_id: 0, job_lv: 0, training_id: null, },
  { contents_id: 15, job_id: 0, job_lv: 1, training_id: 10, },
  { contents_id: 16, job_id: 0, job_lv: 3, training_id: 0, },
  { contents_id: 17, job_id: 0, job_lv: 0, training_id: null, },
  { contents_id: 18, job_id: 3, job_lv: 3, training_id: 0, },
  { contents_id: 19, job_id: 6, job_lv: 1, training_id: 1, },
  { contents_id: 20, job_id: 2, jov_lv: 1, training_id: 5, },
  { contents_id: 21, job_id: 1, job_lv: 1, training_id: 5, },
  { contents_id: 22, job_id: 0, job_lv: 5, training_id: 4, },
  { contents_id: 23, job_id: 5, job_lv: 1, training_id: 14, },
  { contents_id: 24, job_id: 5, job_lv: 2, training_id: 10, },
  { contents_id: 25, job_id: 4, job_lv: 1, training_id: 14, },
  { contents_id: 26, job_id: 4, job_lv: 1, training_id: 9, },
  { contents_id: 27, job_id: 6, job_lv: 2, training_id: 5, },
  { contents_id: 28, job_id: 2, jov_lv: 1, training_id: 7, },
  { contents_id: 29, job_id: 2, jov_lv: 3, training_id: 4, },
  { contents_id: 30, job_id: 0, job_lv: 3, training_id: 0, },
  { contents_id: 31, job_id: 1, job_lv: 1, training_id: 11, },
  { contents_id: 32, job_id: 3, job_lv: 1, training_id: 8, },
  { contents_id: 33, job_id: 0, job_lv: 0, training_id: null, },
  { contents_id: 34, job_id: 2, jov_lv: 3, training_id: 8, },
  { contents_id: 35, job_id: 1, job_lv: 2, training_id: 7, },
  { contents_id: 36, job_id: 4, job_lv: 2, training_id: 11, },
  { contents_id: 37, job_id: 1, job_lv: 2, training_id: 1, },
  { contents_id: 38, job_id: 1, job_lv: 1, training_id: 1, },
  { contents_id: 39, job_id: 5, job_lv: 1, training_id: 13, },
  { contents_id: 40, job_id: 4, job_lv: 2, training_id: 6, },
  { contents_id: 41, job_id: 6, job_lv: 2, training_id: 12, },
  { contents_id: 42, job_id: 0, job_lv: 4, training_id: 12, },
  { contents_id: 43, job_id: 1, job_lv: 3, training_id: 3, },
  { contents_id: 44, job_id: 1, job_lv: 5, training_id: 3, },
  { contents_id: 45, job_id: 4, job_lv: 1, training_id: 10, },
  { contents_id: 46, job_id: 7, job_lv: 2, training_id: 3, },
  { contents_id: 47, job_id: 7, job_lv: 5, training_id: 13, },
  { contents_id: 48, job_id: 7, job_lv: 2, training_id: 13, },
  { contents_id: 49, job_id: 7, job_lv: 1, training_id: 14, },
  { contents_id: 50, job_id: 0, job_lv: 2, training_id: 0, },
  { contents_id: 51, job_id: 3, job_lv: 1, training_id: 3, },
  { contents_id: 52, job_id: 0, job_lv: 1, training_id: 6, },
  { contents_id: 53, job_id: 0, job_lv: 0, training_id: null, },
  { contents_id: 54, job_id: 1, job_lv: 2, training_id: 8, },
  { contents_id: 55, job_id: 5, job_lv: 1, training_id: 1, },
  { contents_id: 56, job_id: 3, job_lv: 1, training_id: 7, },
  { contents_id: 57, job_id: 1, job_lv: 1, training_id: 4, },
  { contents_id: 58, job_id: 1, job_lv: 2, training_id: 5, },
  { contents_id: 59, job_id: 5, job_lv: 1, training_id: 5, },
  { contents_id: 60, job_id: 4, job_lv: 1, training_id: 5, },
  { contents_id: 61, job_id: 0, job_lv: 0, training_id: null, },
  { contents_id: 62, job_id: 3, job_lv: 1, training_id: 7, },
  { contents_id: 63, job_id: 2, jov_lv: 2, training_id: 5, },
  { contents_id: 64, job_id: 1, job_lv: 3, training_id: 9, },
  { contents_id: 65, job_id: 2, jov_lv: 2, training_id: 5, },
  { contents_id: 66, job_id: 0, job_lv: 2, training_id: 5, },
  { contents_id: 67, job_id: 4, job_lv: 1, training_id: 0, },
  { contents_id: 68, job_id: 0, job_lv: 3, training_id: 0, },
  { contents_id: 69, job_id: 3, job_lv: 1, training_id: 0, },
  { contents_id: 70, job_id: 0, job_lv: 0, training_id: null, },
  { contents_id: 71, job_id: 0, job_lv: 2, training_id: 14, },
  { contents_id: 72, job_id: 1, job_lv: 1, training_id: 6, },
  { contents_id: 73, job_id: 1, job_lv: 3, training_id: 6, },
  { contents_id: 74, job_id: 2, jov_lv: 3, training_id: 3, },
  { contents_id: 75, job_id: 0, job_lv: 1, training_id: 13, },
  { contents_id: 76, job_id: 5, job_lv: 1, training_id: 7, },
  { contents_id: 77, job_id: 4, job_lv: 1, training_id: 14, },
  { contents_id: 78, job_id: 0, job_lv: 2, training_id: 8, }
];

const releaseTraining = [　//　教育解放条件（オフィスLv）
  [1, 2, 3, 4],
  [5, 6, 7, 8, 9, 10],
  [11, 12, 13, 14],
];

const releaseGenre = [ // ジャンル解放条件 （職業Lv）
  { genre_id: 0, job_id: 1, job_lv: 5, },
  { genre_id: 1, job_id: 0, job_lv: 4, },
  { genre_id: 2, job_id: 4, job_lv: 1, },
  { genre_id: 3, job_id: 0, job_lv: 0 },
  { genre_id: 4, job_id: 1, job_lv: 3, },
  { genre_id: 5, job_id: 0, job_lv: 0 },
  { genre_id: 6, job_id: 1, job_lv: 3, },
  { genre_id: 7, job_id: 5, job_lv: 3, },
  { genre_id: 8, job_id: 3, job_lv: 3, },
  { genre_id: 9, job_id: 5, job_lv: 5, },
  { genre_id: 10, job_id: 7, job_lv: 5, },
  { genre_id: 11, job_id: 0, job_lv: 0 },
  { genre_id: 12, job_id: 2, job_lv: 3, },
  { genre_id: 13, job_id: 5, job_lv: 1, },
  { genre_id: 14, job_id: 0, job_lv: 0 },
  { genre_id: 15, job_id: 4, job_lv: 5, },
  { genre_id: 16, job_id: 4, job_lv: 2, },
  { genre_id: 17, job_id: 6, job_lv: 4, },
  { genre_id: 18, job_id: 0, job_lv: 0 },
  { genre_id: 19, job_id: 6, job_lv: 3, },
];

const masterpieces = [ // 傑作掛け合わせ一覧（genre * content）
  { genre_id: 0, content_ids: [ 3 ,35 ,48 ] },
  { genre_id: 1, content_ids: [ 25 ,18 ,43 ,19 ,34 ,71 ,22 ,64 ,21 ,48 ,45 ,7 ,65 ,24 ,12 ,4 ] },
  { genre_id: 2, content_ids: [ null ] },
  { genre_id: 3, content_ids: [ 49 ,52 ] },
  { genre_id: 4, content_ids: [ 10 ,17 ,33 ,35 ,58 ,67 ] },
  { genre_id: 5, content_ids: [ 37 ,38 ,39 ,43 ] },
  { genre_id: 6, content_ids: [ 14 ,40 ] },
  { genre_id: 7, content_ids: [ 29 ,49 ,77 ] },
  { genre_id: 8, content_ids: [ 64 ,60 ] },
  { genre_id: 9, content_ids: [ 27 ] },
  { genre_id: 10, content_ids: [ 4 ,25 ,22 ,42 ,48 ,45 ,16 ,62 ] },
  { genre_id: 11, content_ids: [ 9 ,44 ,47 ,67 ] },
  { genre_id: 12, content_ids: [ 13 ,19 ,74 ,71 ,22 ,48 ,66 ,45 ,65 ,24 ,11 ,57 ] },
  { genre_id: 13, content_ids: [ 50 ] },
  { genre_id: 14, content_ids: [ 51 ,53 ] },
  { genre_id: 15, content_ids: [ 55 ,54 ] },
  { genre_id: 16, content_ids: [ 10 ,21 ,74 ,7 ,37 ,34 ,39 ] },
  { genre_id: 17, content_ids: [ 56 ,54 ,55 ,59 ,60 ,72 ,73 ,45 ,63 ] },
  { genre_id: 18, content_ids: [ null ] },
  { genre_id: 19, content_ids: [ null ] }
];

export const state = () => ({
  selectedCompany: 0,
  selectedGenre: 0,
  selectedContent: 0,
  selectedJob: 0,
  selectedPopularity: 0,
});
export const mutations = {
  change(state, value) {
    const key = {
      companies: 'selectedCompany',
      genres: 'selectedGenre',
      contents: 'selectedContent',
      jobs: 'selectedJob',
      popularityes: 'selectedPopularity',
    }
    state[key[value.type]] = value.value;
  }
};

