// import queryString from 'query-string'

class SortedRoomsApi {
  static fetchAll() {
    // once we filter sorted rooms by user id, this is how we should do it
    // return fetch(`/sorted_rooms?${queryString.stringify(params)}`);
    return fetch('http://localhost:8080/api/sorted_rooms/', {
      mode: 'no-cors',
      headers: { 'Authorization': 'Token 8d800e57fad15f67102baef44c9beebd693f0dde'}
    });
  }

  static startRoomSorter() {
    return fetch('http://localhost:8080/api/start_room_sorter', {
      mode: 'no-cors',
    });
  }
}

export default SortedRoomsApi;
