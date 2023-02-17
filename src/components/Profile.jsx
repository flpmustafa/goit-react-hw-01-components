export const Profile =({ user, tag, location, avatar, stats }) => {
    return <div className="profile">
<div className="description">
  <img
    src={avatar}
    alt={user}
    className="avatar"
  />
<p className="name">{user}</p>
  <p className="tag">@{tag}</p>
  <p className="location">{location}</p>
</div>

<ul className="stats">
  <li>
    <span className="label">Followers</span>
    <span className="quantity">{stats.followers}</span>
  </li>
  <li>
    <span className="label">Views</span>
    <span className="quantity">{stats.views}</span>
  </li>
  <li>
    <span className="label">Likes</span>
    <span className="quantity">{stats.likes}</span>
  </li>
</ul>
</div>
};