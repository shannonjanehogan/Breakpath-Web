// import queryString from 'query-string'

class SortedRoomsApi {
  static fetchAll() {
    // once we filter sorted rooms by user id, this is how we should do it
    // return fetch(`/sorted_rooms?${queryString.stringify(params)}`);
    return fetch('https://breakpath-api.herokuapp.com/sorted_rooms', {
      mode: 'no-cors',
    });
  }

  static startRoomSorter() {
    return fetch('https://breakpath-api.herokuapp.com/start_room_sorter', {
      mode: 'no-cors',
    });
  }
}

export default SortedRoomsApi;
