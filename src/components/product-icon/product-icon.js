import "./product-icon.scss";

const ProductIcon = ({ categories }) => {
    const withoutCategories = (
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="#3836BD">
            <path d="M11.63 15.214h.625l.004-3.197h-.626l-.003 3.197zm-1.161-1.894h.626l.01-1.738h-.627l-.009 1.738zm2.36-.013h.627l-.01-1.725h-.626l.009 1.725zm-1.916-9.135c0 .57.461 1.031 1.031 1.031.57 0 1.031-.461 1.032-1.031-.001-.569-.462-1.03-1.032-1.031-.57 0-1.031.462-1.031 1.031zm1.546 2.577c0-.285-.23-.515-.515-.515-.285 0-.515.23-.515.515 0 .285.23.515.515.516.285-.001.515-.231.515-.516zm-4.86 5.268c-.332-2.929 1.206-4.092 1.837-4.711l-.002-.009c-.129-.85-.692-4.502 2.503-7.297 3.249 2.807 2.723 6.416 2.594 7.306.631.619 2.174 1.782 1.842 4.711-.5-1.113-1.458-1.832-2.561-2.074-.088.216-.297.707-.393.907l-2.805.009c-.1-.203-.343-.707-.436-.93-1.025.191-1.912.682-2.579 2.088zm4.881 5.939v6.044l6.266-3.343v-2.464l-4.042 2.116-2.224-2.353zm-7.26.19v2.511l6.26 3.34v-5.998l-2.171 2.385-4.089-2.238zm1.617-5.01c-.607-1.281-.386-2.963-.031-4.001l-3.84 1.984 2.254 2.121-2.254 2.482 6.133 3.407 2.381-2.615v-.041l-5.45-2.892.807-.445zm11.909.104l2.254 2.591-6.089 3.24-2.431-2.57v-.004l5.457-2.916-.826-.455c.661-1.263.411-2.937.021-3.983l3.868 2.018-2.277 2.066.023.013z" />
        </svg>
    );

    const fruits = (
        <svg
            enableBackground="new 0 0 197.097 240.563"
            height="240.563px"
            id="Layer_1"
            version="1.1"
            viewBox="0 0 197.097 240.563"
            width="197.097px"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <g>
                <path
                    fill="#3836BD"
                    d="M197.097,107.427c-0.006-22.327-18.131-40.409-40.484-40.412c-10.746-0.002-20.533,4.201-27.78,11.032   c-2.942-3.31-6.42-6.13-10.298-8.333c4.204,0.279,8.896,0.554,13.899,0.785c1.039,0.046,2.006-0.562,2.415-1.52   c0.408-0.958,0.175-2.079-0.582-2.792c-1.159-1.097-2.19-2.102-3.086-2.989c5.291-0.418,13.649-1.414,22.049-3.791   c0.86-0.245,1.521-0.921,1.741-1.788c0.219-0.863-0.031-1.773-0.67-2.4c-3.218-2.91-7.671-4.093-10.923-4.748   c8.77-5.921,18.168-17.834,18.407-17.929l0.003-0.002l0.006-0.009c0.438-0.531,0.617-1.188,0.558-1.822   c0.182-0.354,0.292-0.75,0.286-1.174c-0.021-1.382-1.158-2.485-2.536-2.465c-0.285,0.239-17.725-0.102-27.972,4.294   c0.606-1.976,1.318-4.517,1.362-7.262c0.003-1.227-0.155-2.522-0.553-3.829c-0.259-0.854-0.958-1.508-1.83-1.707   c-0.87-0.201-1.785,0.078-2.393,0.734c-6.247,6.722-11.156,11.911-13.805,14.697c-0.745-1.398-1.763-3.573-3.027-6.887   c-0.381-0.996-1.359-1.644-2.425-1.606c-1.062,0.034-1.995,0.751-2.303,1.768c-2.829,9.282-5.615,18.655-7.678,25.652   C98.54,36.33,94.782,12.124,77.154,0.734c-2.354-1.439-5.432-0.696-6.871,1.658c-1.442,2.358-0.7,5.436,1.658,6.875   c5.765,3.234,9.788,9.746,12.54,17.339c-1.912-0.834-3.98-1.48-6.112-1.93c-1.997-2.572-4.753-5.16-8.38-7.717   c-6.782-4.796-13.075-6.92-18.654-6.923c-13.032,0.04-20.609,11.48-20.63,22.538c-0.018,6.909,2.931,14.048,9.432,18.49   c1.14,0.78,2.694,0.486,3.475-0.65c0.779-1.141,0.489-2.698-0.651-3.475c-4.974-3.409-7.24-8.8-7.254-14.365   c0.071-9.051,5.947-17.521,15.629-17.538c4.283-0.003,9.589,1.641,15.77,6.005c1.415,1.002,2.645,1.982,3.726,2.938   c-7.407,0.474-14.767,4.93-14.783,15.023c0.012,7.214,5.254,11.083,10.574,11.095c7.266-0.055,15.692-5.646,15.874-14.768   c-0.005-1.435-0.236-2.897-0.705-4.379c1.882,0.793,3.555,1.741,4.836,2.709c2.573,10.207,3.32,21.108,3.172,28.247   c0,1.319-0.019,2.489-0.045,3.502c-7.846,1.736-14.832,5.741-20.237,11.295c-7.348-7.554-17.655-12.264-29.031-12.264   C18.131,64.442,0.003,82.523,0,104.854c0.002,15.721,8.996,29.327,22.117,36.009c-2.271,5.053-3.538,10.66-3.536,16.538   c0.003,21.153,16.271,38.482,36.987,40.255c-0.05,0.826-0.085,1.655-0.085,2.492c0.005,22.33,18.13,40.412,40.484,40.415   c22.354-0.003,40.479-18.085,40.484-40.415c0-0.927-0.039-1.844-0.102-2.756c19.588-2.825,34.645-19.64,34.647-39.991   c0.002-4.021-0.603-7.914-1.704-11.593C185.435,140.495,197.092,125.332,197.097,107.427z M77.494,35.329   c-0.012,5.464-5.982,9.759-10.873,9.768c-3.374-0.259-5.349-1.203-5.573-6.094c0.19-7.787,4.528-9.777,11.069-10.07   c1.082-0.033,2.193,0.053,3.306,0.214C76.938,31.496,77.503,33.588,77.494,35.329z M109.953,35.284   c1.619,3.286,2.581,4.253,2.95,4.599c1.005,0.879,2.524,0.813,3.448-0.152c0.005-0.005,4.587-4.779,11.693-12.379   c-0.612,2.417-1.647,4.891-1.767,7.538c0,0.711,0.106,1.488,0.435,2.257c0.334,0.786,1.039,1.339,1.88,1.482   c0.838,0.144,1.687-0.146,2.263-0.777c1.58-2.044,9.29-4.105,16.156-4.83c3.114-0.385,6.084-0.614,8.417-0.751   c-1.455,1.647-3.435,3.818-5.651,6.059c-4.479,4.618-10.297,9.448-13.254,10.156c-0.814,0.225-1.462,0.846-1.719,1.65   c-0.256,0.803-0.089,1.687,0.447,2.34c2.776,2.531,6.723,2.908,10.14,3.694c-10.617,2.184-19.862,2.308-19.879,2.331   c-0.987,0.015-1.872,0.604-2.261,1.515c-0.391,0.907-0.213,1.955,0.458,2.68c0.017,0.018,0.869,0.943,2.375,2.473   c-9.88-0.554-17.992-1.224-22.591-1.638c3.549-3.274,14.479-12.708,29.472-19.622c0.504-0.23,0.723-0.823,0.489-1.324   c-0.23-0.504-0.823-0.723-1.327-0.49c-15.515,7.159-26.725,16.938-30.17,20.136C103.485,57.003,106.566,46.515,109.953,35.284z    M93.479,74.874c0.221,0.048,0.439,0.103,0.671,0.122c0.91,0.072,1.773-0.123,2.542-0.491c0.613-0.038,1.23-0.063,1.854-0.064   c16.844,0.028,30.455,13.625,30.483,30.414c-0.028,16.786-13.64,30.383-30.483,30.411c-16.841-0.028-30.452-13.625-30.483-30.411   C68.092,89.787,79.059,77.299,93.479,74.874z M9.998,104.854c0.031-16.789,13.643-30.386,30.486-30.414   c9.15,0,17.314,4.009,22.916,10.371c-3.388,5.908-5.334,12.745-5.335,20.043c0.001,7.295,1.946,14.131,5.332,20.037   c-5.593,6.361-13.764,10.375-22.913,10.375C23.641,135.237,10.029,121.64,9.998,104.854z M28.582,157.401   c0-4.719,1.084-9.155,2.995-13.129c2.867,0.643,5.846,0.994,8.907,0.994c11.379,0,21.676-4.711,29.029-12.266   c4.542,4.668,10.2,8.243,16.549,10.297c2.22,4.218,3.483,8.994,3.486,14.104c-0.031,16.789-13.643,30.383-30.483,30.415   C42.225,187.784,28.61,174.19,28.582,157.401z M95.968,230.562c-16.841-0.032-30.455-13.625-30.483-30.414   c0-0.97,0.049-1.925,0.136-2.868c12.655-2.059,23.339-9.968,29.17-20.865c6.195,11.576,17.863,19.788,31.556,21.188   c0.069,0.838,0.105,1.687,0.105,2.545C126.419,216.937,112.809,230.53,95.968,230.562z M161,157.401   c-0.031,16.789-13.643,30.383-30.483,30.415c-16.844-0.032-30.454-13.625-30.486-30.415c0.002-4.41,0.942-8.572,2.623-12.341   c9.128-0.919,17.354-4.871,23.67-10.822c7.412,8.339,18.247,13.605,30.289,13.605c0.947,0,1.885-0.044,2.815-0.108   C160.446,150.768,160.998,154.012,161,157.401z M156.612,137.842c-9.653,0-18.228-4.461-23.823-11.44   c3.947-6.237,6.241-13.622,6.242-21.548c-0.001-6.64-1.614-12.898-4.455-18.424c5.56-5.802,13.354-9.414,22.036-9.414   c16.841,0.029,30.454,13.625,30.483,30.411C187.066,124.216,173.453,137.81,156.612,137.842z"
                />
                <path
                    fill="#3836BD"
                    d="M98.547,130c8.498,0,16.015-4.244,20.528-10.724c0.313-0.455,0.204-1.077-0.25-1.394   c-0.452-0.316-1.077-0.204-1.391,0.248c-4.16,5.968-11.063,9.869-18.888,9.869c-0.553,0-0.999,0.449-0.999,1.002   S97.994,130,98.547,130z"
                />
                <path
                    d="M121.091,113.321c0.523,0.167,1.088-0.121,1.258-0.648c0.777-2.418,1.2-4.998,1.2-7.672   c0-0.553-0.449-1.001-1.002-1.001s-0.999,0.449-0.999,1.001c0,2.465-0.388,4.837-1.104,7.059   C120.276,112.586,120.563,113.151,121.091,113.321z"
                    fill="#3836BD"
                />
            </g>
        </svg>
    );

    const lemonade = (
        <svg data-name="Layer 1" id="Layer_1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
                fill="#3836BD"
                d="M18,4V2H14.22l-1,4H12a4,4,0,1,0-4,4h.21l.86,12h9.86L20.07,6H15.28l.5-2Zm-.07,4-.29,4H10.36l-.29-4Z"
            />
        </svg>
    );

    const icecream = (
        <svg
            id="Icons"
            version="1.1"
            viewBox="0 0 32 32"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <path
                fill="#3836BD"
                className="st0"
                d="M22.1,11.4c0.6-1,0.9-2.2,0.9-3.4c0-3.9-3.1-7-7-7S9,4.1,9,8c0,1.2,0.3,2.4,0.9,3.4C8.7,12.1,8,13,8,14  c0,2.2,3.6,3,8,3s8-0.8,8-3C24,13,23.3,12.1,22.1,11.4z"
            />
            <polyline className="st0" points="10,17 16,31 22,17 " fill="#3836BD" />
            <path className="st0" d="M10,11.2c1.5,0.6,3.6,0.8,6,0.8" fill="#3836BD" />
        </svg>
    );
    const ViewIcon = () => {
        switch (categories) {
            case "lemonade":
                return lemonade;
            case "icecream":
                return icecream;
            case "fruits":
                return fruits;
            default:
                return withoutCategories;
        }
    };

    return (
        <div className="product__icon">
            <ViewIcon />
        </div>
    );
};

export default ProductIcon;
