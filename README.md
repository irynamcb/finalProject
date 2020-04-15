# Friendsbook

Friendsbook is a social networking website where users can post comments, share photographs and post links to news or other interesting content on the web, chat live, and watch short-form video. 

![](app/assets/images/1.png)

## List of Technologies:

* Front-end:
  - React
  - Redux
  - CSS3
* Back-end:
  - Ruby on Rails
  - PostgreSQL
  - AWS
  
## Example:

### Adding/Deleting friends: 

<img src="app/assets/images/2.png" width=35% height=35% />

Friends controller:

```ruby
def create 

  @friend = Friend.new(user_id: current_user.id, friend_id: params[:id])   
  @friend_request = FriendRequest.find_by(user_id: current_user.id, friend_id: params[:id])
  @opposite_friend = Friend.new(user_id: params[:id], friend_id: current_user.id)
  @opposite_friend_request = FriendRequest.find_by(user_id: params[:id], friend_id: current_user.id)

 begin 
  Friend.transaction do
    @friend.save
    @opposite_friend.save
    @friend_request.destroy if @friend_request 
    @opposite_friend_request.destroy if @opposite_friend_request

    render :create, status: 200

  end
  rescue ActiveRecord::RecordInvalid => exception
    flash.now[:errors] = @friend.errors.full_messages
    render json: @friend.errors.full_messages, status: 422
  end
end
```
Users Reducer:

```ruby
switch (action.type) {
        case RECEIVE_CURRENT_USER:
            userId = Number(Object.keys(action.currentUser.users)[0])
            newState[userId] = action.currentUser.users[userId];
            return Object.assign(newState, action.currentUser.otherUsers);
        case RECEIVE_USER:
            return Object.assign(newState, action.user.users, action.user.otherUsers);
        case REMOVE_FRIEND:
            friendIdx = newState[action.friend.userId].friends.indexOf(action.friend.friendId);
            newState[action.friend.userId].friends.splice(friendIdx, 1);
            userIdx = newState[action.friend.friendId].friends.indexOf(action.friend.userId);
            newState[action.friend.friendId].friends.splice(userIdx, 1);
            return newState;
        case SEND_FRIEND_REQUEST:
            newState[action.data.friendId].friendRequests.push(action.data.userId)
            return newState;
        case REMOVE_FRIEND_REQUEST:
            userIdx = newState[action.data.friendId].friendRequests.indexOf(action.data.userId);
            newState[action.data.friendId].friendRequests.splice(userIdx, 1);
            return newState;
        case ADD_FRIEND:
            newState[action.friendId.userId].friends.push(action.friendId.friendId)
            newState[action.friendId.friendId].friends.push(action.friendId.userId)
            userIdx = newState[action.friendId.userId].friendRequests.indexOf(action.friendId.friendId);
            newState[action.friendId.userId].friendRequests.splice(userIdx, 1);
            return newState;
        default:
            return state;
    }
```

### On Friendsbook users can do the following:

* Leave posts on each other's walls
* Post pictures
* Delete posts
* Like and unlike posts
* Leave comments on posts
* Like and unlike comments
* Delete comments
* Each user can upload an avatar

<img src="app/assets/images/3.png" width=60% height=60% />

<img src="app/assets/images/4.png" width=60% height=60% />

## Future Features:

* Users can post videos on each other's walls
* Users can search for other users on Friendsbook

## Creator:

[Iryna McBride](https://www.linkedin.com/in/iryna-mcbride/)
