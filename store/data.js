import contents from'./data/contents';
import genres from'./data/genres';
import jobs from'./data/jobs';
import trainings from'./data/trainings';
const releaseContents = [ // 内容解放条件（職業Lv+教育）
  { content_id: 0, job_id: 0, job_lv: 1, training_id: 5, },
  { content_id: 1, job_id: 0, job_lv: 2, training_id: 5, },
  { content_id: 2, job_id: 4, job_lv: 1, training_id: 5, },
  { content_id: 3, job_id: 1, job_lv: 2, training_id: 1, },
  { content_id: 4, job_id: 0, job_lv: 2, training_id: 6, },
  { content_id: 5, job_id: 1, job_lv: 2, training_id: 5, },
  { content_id: 6, job_id: 0, job_lv: 2, training_id: 4, },
  { content_id: 7, job_id: 1, job_lv: 2, training_id: 1, },
  { content_id: 8, job_id: 0, job_lv: 0, training_id: null, },
  { content_id: 9, job_id: 5, job_lv: 1, training_id: 5, },
  { content_id: 10, job_id: 1, job_lv: 3, training_id: 9, },
  { content_id: 11, job_id: 4, job_lv: 3, training_id: 12, },
  { content_id: 12, job_id: 2, jov_lv: 2, training_id: 0, },
  { content_id: 13, job_id: 0, job_lv: 0, training_id: null, },
  { content_id: 14, job_id: 0, job_lv: 0, training_id: null, },
  { content_id: 15, job_id: 0, job_lv: 1, training_id: 10, },
  { content_id: 16, job_id: 0, job_lv: 3, training_id: 0, },
  { content_id: 17, job_id: 0, job_lv: 0, training_id: null, },
  { content_id: 18, job_id: 3, job_lv: 3, training_id: 0, },
  { content_id: 19, job_id: 6, job_lv: 1, training_id: 1, },
  { content_id: 20, job_id: 2, jov_lv: 1, training_id: 5, },
  { content_id: 21, job_id: 1, job_lv: 1, training_id: 5, },
  { content_id: 22, job_id: 0, job_lv: 5, training_id: 4, },
  { content_id: 23, job_id: 5, job_lv: 1, training_id: 14, },
  { content_id: 24, job_id: 5, job_lv: 2, training_id: 10, },
  { content_id: 25, job_id: 4, job_lv: 1, training_id: 14, },
  { content_id: 26, job_id: 4, job_lv: 1, training_id: 9, },
  { content_id: 27, job_id: 6, job_lv: 2, training_id: 5, },
  { content_id: 28, job_id: 2, jov_lv: 1, training_id: 7, },
  { content_id: 29, job_id: 2, jov_lv: 3, training_id: 4, },
  { content_id: 30, job_id: 0, job_lv: 3, training_id: 0, },
  { content_id: 31, job_id: 1, job_lv: 1, training_id: 11, },
  { content_id: 32, job_id: 3, job_lv: 1, training_id: 8, },
  { content_id: 33, job_id: 0, job_lv: 0, training_id: null, },
  { content_id: 34, job_id: 2, jov_lv: 3, training_id: 8, },
  { content_id: 35, job_id: 1, job_lv: 2, training_id: 7, },
  { content_id: 36, job_id: 4, job_lv: 2, training_id: 11, },
  { content_id: 37, job_id: 1, job_lv: 2, training_id: 1, },
  { content_id: 38, job_id: 1, job_lv: 1, training_id: 1, },
  { content_id: 39, job_id: 5, job_lv: 1, training_id: 13, },
  { content_id: 40, job_id: 4, job_lv: 2, training_id: 6, },
  { content_id: 41, job_id: 6, job_lv: 2, training_id: 12, },
  { content_id: 42, job_id: 0, job_lv: 4, training_id: 12, },
  { content_id: 43, job_id: 1, job_lv: 3, training_id: 3, },
  { content_id: 44, job_id: 1, job_lv: 5, training_id: 3, },
  { content_id: 45, job_id: 4, job_lv: 1, training_id: 10, },
  { content_id: 46, job_id: 7, job_lv: 2, training_id: 3, },
  { content_id: 47, job_id: 7, job_lv: 5, training_id: 13, },
  { content_id: 48, job_id: 7, job_lv: 2, training_id: 13, },
  { content_id: 49, job_id: 7, job_lv: 1, training_id: 14, },
  { content_id: 50, job_id: 0, job_lv: 2, training_id: 0, },
  { content_id: 51, job_id: 3, job_lv: 1, training_id: 3, },
  { content_id: 52, job_id: 0, job_lv: 1, training_id: 6, },
  { content_id: 53, job_id: 0, job_lv: 0, training_id: null, },
  { content_id: 54, job_id: 1, job_lv: 2, training_id: 8, },
  { content_id: 55, job_id: 5, job_lv: 1, training_id: 1, },
  { content_id: 56, job_id: 3, job_lv: 1, training_id: 7, },
  { content_id: 57, job_id: 1, job_lv: 1, training_id: 4, },
  { content_id: 58, job_id: 1, job_lv: 2, training_id: 5, },
  { content_id: 59, job_id: 5, job_lv: 1, training_id: 5, },
  { content_id: 60, job_id: 4, job_lv: 1, training_id: 5, },
  { content_id: 61, job_id: 0, job_lv: 0, training_id: null, },
  { content_id: 62, job_id: 3, job_lv: 1, training_id: 7, },
  { content_id: 63, job_id: 2, jov_lv: 2, training_id: 5, },
  { content_id: 64, job_id: 1, job_lv: 3, training_id: 9, },
  { content_id: 65, job_id: 2, jov_lv: 2, training_id: 5, },
  { content_id: 66, job_id: 0, job_lv: 2, training_id: 5, },
  { content_id: 67, job_id: 4, job_lv: 1, training_id: 0, },
  { content_id: 68, job_id: 0, job_lv: 3, training_id: 0, },
  { content_id: 69, job_id: 3, job_lv: 1, training_id: 0, },
  { content_id: 70, job_id: 0, job_lv: 0, training_id: null, },
  { content_id: 71, job_id: 0, job_lv: 2, training_id: 14, },
  { content_id: 72, job_id: 1, job_lv: 1, training_id: 6, },
  { content_id: 73, job_id: 1, job_lv: 3, training_id: 6, },
  { content_id: 74, job_id: 2, jov_lv: 3, training_id: 3, },
  { content_id: 75, job_id: 0, job_lv: 1, training_id: 13, },
  { content_id: 76, job_id: 5, job_lv: 1, training_id: 7, },
  { content_id: 77, job_id: 4, job_lv: 1, training_id: 14, },
  { content_id: 78, job_id: 0, job_lv: 2, training_id: 8, }
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
  contents: [],
  genres: [],
  jobs: [],
  trainings: [],
});
export const mutations = {
  init(state) {
    state.contents = contents();
    state.genres = genres();
    state.jobs = jobs();
    state.trainings = trainings();
  }
};

export const getters = {
  getGenreById: (state) => (id) => {

    return Object.keys(state.genres).length > 1
      ? state.genres.find((g) => (id == g.id))
      : {};
  },
  getContentById: (state) => (id) => {
    return Object.keys(state.genres).length > 1
      ? state.contents.find((c) => (id == c.id))
      : {};
  },
  getJobById: (state) => (id) => {
    return Object.keys(state.genres).length > 1
      ? state.jobs.find((j) => (id == j.id))
      : {};
  },
  getTrainingById: (state) => (id) => {
    return Object.keys(state.genres).length > 1
      ? state.trainings.find((t) => (id == t.id))
      : {};
  },
  getReleaseTrainingLv: () => (training_id) => {
    return releaseTraining.findIndex((trainings) => {
      return trainings.indexOf(training_id) !== -1;
    });
  },
  releaseContents (state, getters) {
    return releaseContents.map((data) => {
      return {
        content_id: data.content_id,
        content: getters.getContentById(data.content_id),
        job_id: data.job_id,
        job: getters.getJobById(data.job_id),
        job_lv: data.job_lv,
        training_id: data.training_id,
        training: getters.getTrainingById(data.training_id),
        office_lv: getters.getReleaseTrainingLv(data.training_id),
      };
    });
  },
  filterContentByOfficeLv(state, getters, rootState){
    return getters.releaseContents.filter((content) => {
      return rootState.filter.selectedOffice >= content.office_lv;
    })
  },
  releaseGenres (state) {
    return releaseGenre.map((data)=> {
      return {
        genre_id: data.genre_id,
        genre: getters.getGenreById(data.genre_id),
        job_id: data.job_id,
        job: getters.getJobById(data.job_id),
        job_lv: data.job_lv,
      }
    })
  },
  addOfficeLvToContent: (state, getters) => (content_id) => {
    const content = getters.getContentById(content_id);
    // releaseTraining からcontent.training
  },
  masterpieces(state, getters, rootState) {
    //会社規模でフィルタリングを行う
    const result = masterpieces.map(piece => {
      const contents = piece.content_ids.map(contentId => {
        return getters.getContentById(contentId);
      });

      return {
        genre_id: piece.genre_id,
        genre: getters.getGenreById(piece.genre_id),
        content_ids: piece.content_ids,
        contents,
      }
    });
    return result;
  },
  filterdGenres(state, getters, rootState) {
    const result = releaseGenre.filter((genre) => {
      return genre.job_id === rootState.filter.selectedJob;
    }).map((genre) => {
      return {
        ...genre,
        genre: {
          ...state.genres.find((g) => (genre.genre_id == g.id)),
        },
        job: {
          ...state.jobs.find((j) => (genre.job_id == j.id)),
        }
      }
    });

    //TODO popularity filter

    return result;
  },
  filterdContents() {},
  // filterdJobs() {},
  // filterdPopularities() {},
  // filterdGenres() {},
}
