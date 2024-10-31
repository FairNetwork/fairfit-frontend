import './tags.scss';
import { Checkbox, FormControlLabel } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { selectGymTags, selectTags } from '../../../../redux/gym/selectors';
import { ReactElement, useEffect, useMemo } from 'react';
import { loadTags } from '../../../../redux/gym/actions';
import { loadRequestStatistics } from '../../../../redux/statistics/actions';

const Tags = () => {
    const dispatch = useAppDispatch();

    const tags = useAppSelector(selectTags);
    const selectedTags = useAppSelector(selectGymTags);

    useEffect(() => {
        void dispatch(loadRequestStatistics());
    }, [dispatch]);

    useEffect(() => {
        void dispatch(loadTags());
    }, [dispatch]);

    const content = useMemo(() => {
        const items: ReactElement[] = [];

        tags.forEach(({ name, id }) => {
            items.push(
                <FormControlLabel
                    key={`tag-checkbox--${id}`}
                    control={
                        <Checkbox
                            id={id}
                            checked={((selectedTags ?? []) as unknown as string[]).includes(name)}
                        />
                    }
                    label={name}
                />
            );
        });

        return items;
    }, [selectedTags, tags]);

    return (
        <div className="tags">
            <h3>Tags</h3>
            <i>
                Wähle aus verschiedenen Eigenschaften deines Studios aus, um es besser zu
                kategorisieren und auffindbar zu machen.
            </i>
            <div className="tags__content">{content}</div>
        </div>
    );
};

Tags.displayName = 'Tags';

export default Tags;
