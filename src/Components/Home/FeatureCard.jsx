import { Link } from 'react-router-dom';

const FeatureCard = ({ feature }) => {
  const { title, companyLogo, company, address, salary, tags, _id } = feature;
  return (
    <div className='text-left p-5 border-gray-300 border rounded'>
      <img src={companyLogo} alt='' className='object-cover py-5 max-h-20' />
      <h2 className='text-xl font-bold capitalize'>{title}</h2>
      <p className='text-gray-500 py-4 text-lg'>{company}</p>
      {tags.map((tag, index) => (
        <button
          key={index+'g'}
          className='border-sky-600 my-3 capitalize mr-3 py-2 px-4 rounded border-2'
        >
          {tag}
        </button>
      ))}
      <p className='mb-3'>
        <span>{address}</span> <span>{salary}</span>
      </p>
      <Link
        to={`jobDetails/${_id}`}
        className='btn-primary inline-block mb-auto'
      >
        Job details
      </Link>
    </div>
  );
};

export default FeatureCard;
