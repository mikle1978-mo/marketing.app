import cl from "./work_item.module.css";

const WorkItem = ({ service, onToggle }) => (
    <div className={cl.service_item}>
        <label className={cl.service_label}>
            {service.name} (${service.costPerUnit})
        </label>
        <label className={cl.switch}>
            <input
                type='checkbox'
                checked={service.selected}
                onChange={() => onToggle(service.id)}
            />
            <span className={cl.slider}></span>
        </label>
    </div>
);

export default WorkItem;
