import Link from 'next/link';

const CategoryLabel = ({ children }) => {
  const colorKey = {
    Business: 'yellow',
    Finance: 'blue',
    Product: 'green',
    Soft_Skills: 'purple',
    Economics: 'red',
  };

  return (
    <div
      className={`px-2 py-1 bg-${colorKey[children]}-600 text-gray-100 font-bold rounded`}
    >
      <Link href={`/blog/category/${children.toLowerCase()}`}>{children}</Link>
    </div>
  );
};

export default CategoryLabel;
