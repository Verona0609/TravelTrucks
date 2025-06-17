const Features = () => {
  const optionsMap = {
    AC: 'icon-wind',
    automatic: 'icon-diagram',
    kitchen: 'icon-cup-hot',
    TV: 'icon-tv',
    bathroom: 'icon-ph_shower',
    petrol: 'icon-fuel-pump',
    radio: 'icon-radios',
    refrigerator: 'icon-fridge',
    microwave: 'icon-microwave',
    gas: 'icon-gas-stove',
    water: 'icon-water',
  };
  const activeFilters = Object.entries(optionsMap)
    .filter(([key]) => camper[key])
    .map(([key, icon]) => ({
      name: key,
      icon,
    }));
  return (
    <div>
      <div>
        <h3>Features</h3>
        <h3>Reviews</h3>
      </div>
      <div>
        {activeFilters.length > 0 && (
          <ul className={css.filterlist}>
            {activeFilters.map((filter, index) => (
              <li key={index} className={css.filterItem}>
                <Icon className={css.iconId} id={filter.icon} size={20} />
                <p>{filter.name}</p>
              </li>
            ))}
          </ul>
        )}
        <div>
          <h3>Vehicle details</h3>
        </div>
      </div>
    </div>
  );
};

export default Features;
