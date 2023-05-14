import PropTypes from 'prop-types';
import { ListItem, ListLable, ListPercentage, StatisticHeader, StatisticList, StatisticSection } from './Statistics.styled';

export const Statistics = ({ title ,stats } ) => {
    return (
        <StatisticSection>
            {title.header ? <StatisticHeader>{title.header}</StatisticHeader> : <></>}
            <StatisticList>
                {stats.map( item => (
                    <ListItem key={item.id}>
                        <ListLable>{item.label}</ListLable>
                        <ListPercentage>{item.percentage}%</ListPercentage>
                    </ListItem>     
                ))}
            </StatisticList>
        </StatisticSection>
    )
} 

Statistics.propTypes = {
    title: PropTypes.shape({
        title: PropTypes.string,
    }),
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.oneOf([".docx", ".pdf", ".mp3", ".psd"]).isRequired,
            percentage: PropTypes.number.isRequired
        })
    ).isRequired,
};