import PropTypes from "prop-types";

export const Statistics = ({title, stats}) => {
    
return (
<section class="statistics">
  {title && <h2 class="title">{title}</h2>}
  <ul class="stat-list">

  {stats.map(({id,label,percentage}) => (
    
    <li class="item" key={id} >
      <span class="label">{label}</span>
      <span class="percentage">{percentage}</span>
    </li>
  ))}
  </ul>
</section>
)
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};