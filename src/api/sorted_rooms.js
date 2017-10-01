// import queryString from 'query-string'
import { getToken } from '../services/auth';

class SortedRoomsApi {
  static fetchAll() {
    // once we filter sorted rooms by user id, this is how we should do it
    // return fetch(`/sorted_rooms?${queryString.stringify(params)}`);
    return fetch('http://localhost:8080/api/sorted_rooms/', {
      headers: { 'Authorization': `Token ${getToken()}`}
    });
  }

  static startRoomSorter() {
    return fetch('http://localhost:8080/api/start_room_sorter');
  }
}

export default SortedRoomsApi;
