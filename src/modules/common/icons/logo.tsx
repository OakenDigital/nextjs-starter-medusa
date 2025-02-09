import React from "react"
import { IconProps } from "types/icon"
import clsx from "clsx"

const baseWidth = 200;
const baseHeight = 59.939;

const Logo = ({
  color = "currentColor",
  ...props
}) => {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={(baseWidth)}
      height={(baseHeight)}
      className={clsx("scale-75 transition-all", { "invert": !props.isHome })}
    >
      <defs>
        <path
          id="a"
          d="M1.844 11.52V3.516c0-1.28.67-1.93 2.149-1.93 1.317 0 2.169.65 2.169 1.93v1.971h1.722V3.17c0-2.012-1.5-3.17-3.891-3.17C1.56 0 0 1.158 0 3.17v8.696c0 2.012 1.5 3.17 3.912 3.17 2.432 0 3.972-1.158 3.972-3.17V9.55H6.162v1.97c0 1.383-.852 1.931-2.17 1.931-1.479 0-2.148-.548-2.148-1.93Z"
        />
        <path id="b" d="M21.015 13.248H16.19V.203h-1.845v14.63h6.669z" />
        <path
          id="c"
          d="M32.564.203v10.87c0 1.626-.79 2.297-2.23 2.297s-2.25-.67-2.25-2.296V.204H26.26V11.54c0 2.215 1.581 3.495 4.074 3.495s4.074-1.28 4.074-3.495V.203h-1.844Z"
        />
        <path
          id="d"
          d="M44.802 14.833c2.473 0 4.053-1.158 4.053-3.617V9.773c0-1.625-.73-2.56-2.168-2.946 1.033-.406 1.621-1.199 1.621-2.438v-.833c0-2.337-1.5-3.353-3.871-3.353h-3.344v14.63h3.709Zm0-7.091c1.358 0 2.23.67 2.23 2.092v1.159c0 1.585-.872 2.336-2.23 2.336h-1.865V7.742h1.865Zm-.365-6.035c1.338 0 2.047.65 2.047 2.093v.528c0 1.341-.73 1.991-2.047 1.991h-1.5V1.707h1.5Z"
        />
        <path id="e" d="M0 0h47.848v59.041H0z" />
        <path
          id="g"
          d="M1.662 14.833V4.816l-.04-1.098.466 1.22 4.884 9.895h1.48V.203H6.79v9.916l.04 1.158-.466-1.199L1.48.203H0v14.63z"
        />
        <path
          id="h"
          d="M19.13 0c-2.554 0-4.074 1.24-4.074 3.373v8.29c0 2.134 1.52 3.373 4.074 3.373 2.574 0 4.094-1.24 4.094-3.373v-8.29C23.224 1.239 21.704 0 19.13 0Zm0 1.585c1.54 0 2.25.65 2.25 2.255v7.356c0 1.605-.71 2.255-2.25 2.255-1.52 0-2.23-.65-2.23-2.255V3.84c0-1.605.71-2.255 2.23-2.255Z"
        />
        <path
          id="i"
          d="M31.672 14.833V9.205h1.46l2.857 5.628h2.088L34.935 8.92c1.54-.508 2.17-1.707 2.17-3.414v-1.32c0-2.5-1.156-3.983-4.156-3.983h-3.121v14.63h1.844ZM33.03 1.788c1.5 0 2.23.772 2.23 2.5v.995c0 1.646-.73 2.337-2.29 2.337h-1.298V1.788h1.358Z"
        />
        <path
          id="j"
          d="M47.052 14.833V1.788h3.101V.203h-8.067v1.585h3.122v13.045z"
        />
        <path
          id="k"
          d="M57.608 14.833V8.067h4.337v6.766h1.825V.203h-1.825v6.279h-4.337V.203h-1.844v14.63z"
        />
        <path
          id="l"
          d="M81.456 14.833V1.788h3.101V.203H76.49v1.585h3.122v13.045z"
        />
        <path
          id="m"
          d="M97.039 13.248h-5.027V8.067h3.851V6.482h-3.85V1.788h5.026V.203h-6.871v14.63h6.87z"
        />
        <path
          id="n"
          d="m102.325.203 3.04 7.193-3.466 7.437h1.926l2.716-6.136 2.716 6.136h1.946l-3.487-7.477 3.061-7.153h-1.865l-2.35 5.811-2.352-5.81z"
        />
        <path
          id="o"
          d="m117.441 14.833.79-3.373h4.197l.79 3.373h1.845l-3.67-14.63h-2.127l-3.669 14.63h1.844Zm2.899-12.435 1.702 7.396h-3.425l1.723-7.396Z"
        />
        <path
          id="p"
          d="M137.889 10.383c0-2.174-.69-3.15-2.899-3.739l-1.54-.386c-1.135-.305-1.379-.63-1.379-2.032v-.69c0-1.504.507-1.992 1.622-1.992h.345c1.054 0 1.702.508 1.702 1.788v1.22h1.764V2.966c0-1.89-1.338-2.967-3.466-2.967h-.386c-2.168 0-3.364 1.179-3.364 3.414v.914c0 2.418.83 3.17 2.554 3.576l1.662.407c1.216.304 1.58.995 1.58 2.031v1.138c0 1.788-.709 2.012-1.823 2.012h-.791c-1.094 0-1.621-.366-1.621-1.87v-1.28h-1.764v1.728c0 2.133 1.176 2.966 3.324 2.966h.933c2.29 0 3.547-1.077 3.547-3.637v-1.016Z"
        />
        <path
          id="q"
          d="M4.397 14.833c2.755 0 4.518-1.077 4.518-3.373V9.408c0-1.321-.547-2.215-1.925-2.642.872-.426 1.378-1.117 1.378-2.113v-.975C8.368 1.26 6.585.203 3.81.203H0v14.63h4.397Zm0-6.441c.81 0 1.297.366 1.297 1.199v1.28c0 .975-.487 1.422-1.297 1.422H3.222V8.392h1.175Zm-.588-5.649c1.013 0 1.337.447 1.337 1.422v.407c0 .874-.344 1.463-1.337 1.463h-.587V2.743h.587Z"
        />
        <path
          id="r"
          d="M17.867 14.833V9.814h.689l2.431 5.019h3.607l-2.959-5.588c1.115-.59 1.58-1.625 1.58-3.007V4.186c0-2.5-1.235-3.983-4.497-3.983h-4.073v14.63h3.222Zm.932-11.887c.73 0 1.195.468 1.195 1.423v1.28c0 .955-.466 1.422-1.195 1.422h-.932V2.946h.932Z"
        />
        <path
          id="s"
          d="M33.788 0c-2.775 0-4.538 1.24-4.538 3.373v8.29c0 2.134 1.763 3.373 4.538 3.373 2.776 0 4.539-1.24 4.539-3.373v-8.29C38.327 1.239 36.564 0 33.788 0Zm0 2.763c.892 0 1.317.366 1.317 1.2v7.11c0 .834-.425 1.2-1.317 1.2-.891 0-1.317-.366-1.317-1.2v-7.11c0-.834.426-1.2 1.317-1.2Z"
        />
        <path
          id="t"
          d="M47.218 14.833V7.457l-.04-1.26.506 1.26 3.789 7.376h2.654V.203H51.29v7.335l.02 1.159-.405-1.016-3.87-7.478h-2.634v14.63z"
        />
        <path
          id="u"
          d="M63.423 11.277V3.76c0-.69.365-.996 1.115-.996.688 0 1.094.305 1.094.996v1.727h3.039V3.17c0-2.012-1.6-3.17-4.133-3.17-2.655 0-4.336 1.158-4.336 3.17v8.696c0 2.012 1.6 3.17 4.133 3.17 2.654 0 4.336-1.158 4.336-3.17V9.55h-3.04v1.727c0 .69-.405.996-1.093.996-.75 0-1.115-.305-1.115-.996Z"
        />
        <path
          id="v"
          d="M78.96 0c-2.776 0-4.539 1.24-4.539 3.373v8.29c0 2.134 1.763 3.373 4.539 3.373s4.538-1.24 4.538-3.373v-8.29C83.498 1.239 81.736 0 78.96 0Zm0 2.763c.891 0 1.317.366 1.317 1.2v7.11c0 .834-.426 1.2-1.317 1.2-.892 0-1.317-.366-1.317-1.2v-7.11c0-.834.425-1.2 1.317-1.2Z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <g fill="#FFF" fillRule="nonzero">
          <g transform="translate(61.975 44.698)">
            <use xlinkHref="#a" />
            <use xlinkHref="#a" />
          </g>
          <g transform="translate(61.975 44.698)">
            <use xlinkHref="#b" />
            <use xlinkHref="#b" />
          </g>
          <g transform="translate(61.975 44.698)">
            <use xlinkHref="#c" />
            <use xlinkHref="#c" />
          </g>
          <g transform="translate(61.975 44.698)">
            <use xlinkHref="#d" />
            <use xlinkHref="#d" />
          </g>
        </g>
        <g transform="translate(-.052 .53)">
          <mask id="f" fill="#fff">
            <use xlinkHref="#e" />
          </mask>
          <path
            fill="#FFF"
            d="M.046 32.713a3.192 3.192 0 0 1 1.535.36c-.06-.793.03-1.568.13-2.344.094-.736.198-1.472.262-2.211.06-.703.132-1.414.094-2.115-.04-.736-.199-1.467-.32-2.197-.05-.307-.135-.609-.217-.969 1.375.507 2.088 1.587 2.72 2.76.9-1.642 2.142-3.021 3.38-4.402.582-.65 1.128-1.323 1.413-2.156.22-.643.373-1.31.56-1.985.296.202.472.522.613.866.242.591.295 1.21.26 1.842-.005.07-.014.142.002.208.022.093.066.181.1.271.084-.048.193-.077.249-.148.564-.722 1.191-1.376 1.96-1.884.45-.297.926-.522 1.478-.592-.085.406-.174.79-.245 1.177-.048.267-.09.539-.1.81-.016.416.19.528.593.383.813-.293 1.454-.838 2.051-1.43.783-.773 1.527-1.585 2.284-2.377.218 1.388-.071 2.733-.633 4.097.164-.07.286-.107.392-.171 1.016-.621 2.055-1.21 3.038-1.88 1.232-.841 2.421-1.745 3.62-2.634 1.173-.87 2.325-1.767 3.504-2.63 1.049-.766 2.2-1.318 3.504-1.49.39-.05.784-.072 1.176-.115.61-.066 1.228-.1 1.829-.22a39.933 39.933 0 0 0 2.898-.682c.96-.267 1.907-.593 2.765-1.121.17-.104.328-.227.49-.343.758-.541.72-1.481.355-2.158-.483-.896-1.334-1.345-2.218-1.738-.262-.116-.537-.203-.828-.311.111-.376.426-.556.787-.719-.417-.377-.913-.55-1.44-.645-.746-.135-1.462-.043-2.182.221-.446.163-.945.268-1.417.007-.083-.046-.161-.098-.286-.174.137-.069.248-.11.343-.175.293-.198.596-.388.86-.62.08-.068.046-.265.064-.403-.12-.006-.256-.05-.36-.01-.342.129-.663.327-1.013.427-.481.139-.978.177-1.44-.103-.036-.021-.074-.04-.106-.066-.018-.016-.027-.043-.05-.083.742-.224 1.241-.779 1.792-1.267.35-.31.716-.607 1.102-.869.542-.368 1.164-.562 1.806-.64A8.949 8.949 0 0 1 38.75.012c.864.047 1.723.161 2.556.416 1.754.537 3.163 1.568 4.286 3.027l.472-.64c.62.866 1.17 1.712 1.478 2.699.193.618.34 1.246.3 1.891-.065 1.08-.226 2.14-.985 2.994-.595.67-1.34 1.134-2.17 1.428-1.17.414-2.363.765-3.546 1.142-.065.02-.135.024-.2.045-.47.147-.599.316-.425.756.466 1.175.978 2.333 1.44 3.51.3.76.559 1.543.57 2.371.013.88-.263 1.665-.88 2.319-.647.688-1.28 1.39-1.918 2.088-.116.127-.223.262-.369.434.115.028.188.062.262.063.978.02 1.955.035 2.933.056.587.012 1.175.013 1.76.057.55.041 1.097.121 1.642.205.444.069.446.173.36.599-.161.797-.591 1.477-1.023 2.156-.43.68-1.06 1.127-1.699 1.57-.856.596-1.718 1.183-2.576 1.775-1.145.79-2.287 1.584-3.435 2.369-.446.305-.757.687-.844 1.24-.037.238-.243.336-.445.433-.139.066-.255.179-.38.271.137.098.265.218.416.287.19.088.402.124.597.201.17.066.243.201.24.392-.009.496.023.994-.01 1.488-.041.62-.116 1.24-.206 1.854-.06.418-.16.83-.262 1.241-.06.244-.193.296-.416.2a2.731 2.731 0 0 1-1.38-1.3l-.153-.3c-.09.282-.17.513-.239.748-.18.618-.349.671-.827.263-.495-.425-.759-.992-.998-1.581-.129-.316-.302-.613-.461-.916-.04-.075-.102-.14-.159-.206-.31-.358-.406-.735-.15-1.172.317-.543.343-1.17.464-1.767.125-.616.382-1.156.865-1.563.755-.636 1.538-1.239 2.277-1.892.409-.362.753-.798 1.126-1.2l-.06-.082c-.409.061-.817.125-1.226.184-.563.083-1.128.159-1.69.244-.516.078-.926-.16-1.33-.427-.639-.423-1.258-.868-1.713-1.571l-.545 1.612c-.459 1.362-.99 2.69-1.968 3.775-.585.648-1.316 1.105-2.105 1.469-.577.266-1.146.553-1.736.786-.583.23-.902.622-1.02 1.236-.224 1.16-.485 2.315-.725 3.472-.092.44-.21.88-.24 1.326-.02.332.065.676.138 1.007.1.453.072.89-.126 1.301-.204.423-.334.845-.193 1.313.007.024 0 .052 0 .078.018.85.028 1.699.055 2.547.025.828.064 1.655.103 2.483.024.503.17.971.429 1.405.262.438.416.917.344 1.425-.036.26-.176.508-.295.749a3.25 3.25 0 0 1-.35.548c-.182.234-.173.52.002.676.427.378.248.823.225 1.254-.01.193-.06.384-.087.577-.032.23-.135.411-.36.486-.948.316-1.89.655-2.852.924-.462.129-.963.12-1.445.177-.191.023-.295-.051-.249-.246.124-.52.264-1.035.39-1.554a2.98 2.98 0 0 1 1.087-1.683c.44-.345.402-.821.324-1.263-.089-.5-.086-.982.04-1.463.197-.75.233-1.495.095-2.262-.098-.547-.105-1.11-.168-1.664-.064-.57-.145-1.136-.225-1.751-.188.415-.367.792-.53 1.177-.368.874-.748 1.745-1.08 2.633-.102.27-.114.597-.081.888.067.605-.153 1.045-.605 1.429-.399.34-.411.881-.079 1.29.21.255.09.552.089.826-.002.264-.085.531-.152.792-.06.234-.17.412-.455.454-.96.142-1.912.33-2.873.453-.452.058-.918.01-1.447.01.057-.258.086-.497.164-.72a4.36 4.36 0 0 1 1.166-1.743c.39-.365.657-.807.733-1.34.035-.247 0-.504.01-.756.014-.383.143-.752.44-.974.441-.331.577-.802.7-1.278.236-.911.449-1.83.644-2.75.097-.458.122-.93.198-1.394.179-1.093.061-2.194.107-3.29.013-.31.125-.616.15-.927.034-.455.09-.921.03-1.368-.105-.763-.286-1.516-.448-2.271-.127-.6-.333-1.158-.774-1.616-.618-.641-1.202-1.315-1.823-1.954a.95.95 0 0 0-.558-.274c-.586-.043-1.184-.07-1.723.241-.368.213-.547.47-.19.81.402.385.455.854.337 1.384-.068.308-.048.636-.062.955-.02.466-.019.933-.058 1.397-.04.47.105.882.309 1.29.243.488.49.976.699 1.48.092.22.07.487.146.718.078.238.186.475.327.682.165.241.391.44.565.676.067.092.119.257.083.354-.172.467-.45.868-.851 1.22-.32-.428-.635-.828-.925-1.246-.07-.1-.06-.258-.087-.39-.014-.065-.02-.185-.04-.187-.255-.024-.515-.056-.766-.025-.058.007-.106.237-.128.37-.082.484.084.871.45 1.2.232.207.41.472.63.693.172.172.116.293-.029.436-.255.252-.589.268-.907.3-.429.042-.862.05-1.294.056-.47.008-.807-.234-.867-.7-.073-.563-.347-1-.702-1.408-1.296-1.483-2.566-2.99-4.036-4.308a2.518 2.518 0 0 1-.862-1.701c-.027-.28-.109-.552-.148-.83a.702.702 0 0 0-.314-.502c-.585-.414-1.167-.834-1.562-1.454a4.015 4.015 0 0 1-.565-1.523c-.06-.363-.093-.732-.115-1.1-.011-.195.026-.393.044-.623"
            mask="url(#f)"
          />
        </g>
        <g fill="#FFF" fillRule="nonzero">
          <g transform="translate(62.111)">
            <use xlinkHref="#g" />
            <use xlinkHref="#g" />
          </g>
          <g transform="translate(62.111)">
            <use xlinkHref="#h" />
            <use xlinkHref="#h" />
          </g>
          <g transform="translate(62.111)">
            <use xlinkHref="#i" />
            <use xlinkHref="#i" />
          </g>
          <g transform="translate(62.111)">
            <use xlinkHref="#j" />
            <use xlinkHref="#j" />
          </g>
          <g transform="translate(62.111)">
            <use xlinkHref="#k" />
            <use xlinkHref="#k" />
          </g>
          <g transform="translate(62.111)">
            <use xlinkHref="#l" />
            <use xlinkHref="#l" />
          </g>
          <g transform="translate(62.111)">
            <use xlinkHref="#m" />
            <use xlinkHref="#m" />
          </g>
          <g transform="translate(62.111)">
            <use xlinkHref="#n" />
            <use xlinkHref="#n" />
          </g>
          <g transform="translate(62.111)">
            <use xlinkHref="#o" />
            <use xlinkHref="#o" />
          </g>
          <g transform="translate(62.111)">
            <use xlinkHref="#p" />
            <use xlinkHref="#p" />
          </g>
        </g>
        <g fill="#FFF" fillRule="nonzero">
          <g transform="translate(61.838 22.69)">
            <use xlinkHref="#q" />
            <use xlinkHref="#q" />
          </g>
          <g transform="translate(61.838 22.69)">
            <use xlinkHref="#r" />
            <use xlinkHref="#r" />
          </g>
          <g transform="translate(61.838 22.69)">
            <use xlinkHref="#s" />
            <use xlinkHref="#s" />
          </g>
          <g transform="translate(61.838 22.69)">
            <use xlinkHref="#t" />
            <use xlinkHref="#t" />
          </g>
          <g transform="translate(61.838 22.69)">
            <use xlinkHref="#u" />
            <use xlinkHref="#u" />
          </g>
          <g transform="translate(61.838 22.69)">
            <use xlinkHref="#v" />
            <use xlinkHref="#v" />
          </g>
        </g>
        <g opacity={0.8}>
          <path
            fill="#D8D8D8"
            d="M119.952 51.806a4.066 4.066 0 1 1 0 8.132 4.066 4.066 0 0 1 0-8.132Zm0 .34a3.727 3.727 0 1 0 .001 7.454 3.727 3.727 0 0 0 0-7.455Z"
          />
          <path
            fill="#FFF"
            fillRule="nonzero"
            d="M116.903 54.836v-.319h2.05v.32h-.826v2.391h-.349v-2.392zM119.816 57.228v-2.71h.48l.817 2.238.828-2.239h.478v2.711h-.358v-2.191l-.785 2.191h-.324l-.78-2.17v2.17z"
          />
        </g>
      </g>
    </svg >
  )
}

export default Logo
