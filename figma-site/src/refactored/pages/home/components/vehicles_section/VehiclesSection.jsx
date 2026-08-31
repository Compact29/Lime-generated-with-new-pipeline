import "./VehiclesSection.css";
import { useId } from "react";
import VehicleCard from "../../../../components/vehicle_card/VehicleCard.jsx";

const VARIANTS = ["default"];

const DEFAULT_VEHICLES = [
  {
    id: "e-scooter",
    name: "E-Scooter",
    image: "/generated-pages/page-1/generated-assets/named/n/1661d33bb85f.png",
    imageNarrow: "/generated-pages/page-1/generated-assets/vectors/2001_3230.svg",
  },
  {
    id: "e-bike",
    name: "E-Bike",
    image: "/generated-pages/page-1/generated-assets/named/n/5e006e83359c.png",
    imageNarrow: "/generated-pages/page-1/generated-assets/vectors/2001_3234.svg",
  },
];

export default function VehiclesSection({
  variant = "default",
  className = "",
  eyebrow = "Our Vehicles",
  heading = "Discover the Gen4",
  vehicles = DEFAULT_VEHICLES,
  onVehicleSelect,
}) {
  const headingId = useId();
  const resolvedVariant = VARIANTS.includes(variant) ? variant : VARIANTS[0];
  const rootClassName = [
    "vehicles-section",
    `vehicles-section--${resolvedVariant}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");
  const items = Array.isArray(vehicles) ? vehicles : [];

  return (
    <section className={rootClassName} aria-labelledby={headingId}>
      <div className="vehicles-section__container">
        <div className="vehicles-section__header">
          {eyebrow ? (
            <p className="vehicles-section__eyebrow">{eyebrow}</p>
          ) : null}
          <h2 className="vehicles-section__heading" id={headingId}>
            {heading}
          </h2>
        </div>

        <ul className="vehicles-section__list">
          {items.map((vehicle, index) => (
            <li className="vehicles-section__item" key={vehicle.id ?? index}>
              <VehicleCard
                variant="default"
                name={vehicle.name}
                image={vehicle.image}
                imageNarrow={vehicle.imageNarrow}
                imageAlt={vehicle.imageAlt}
                href={vehicle.href}
                onClick={
                  onVehicleSelect
                    ? (event) => onVehicleSelect(vehicle, event)
                    : undefined
                }
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
