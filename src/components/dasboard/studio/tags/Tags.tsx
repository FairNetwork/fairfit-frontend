import './tags.scss';
import { Checkbox, FormControlLabel } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { selectGymTags, selectTags } from '../../../../redux/gym/selectors';
import { ReactElement, useEffect, useMemo, useCallback, ChangeEvent, useState } from 'react';
import { loadTags, updateGymAction } from '../../../../redux/gym/actions';

const Tags = () => {
    const dispatch = useAppDispatch();

    const [newTags, setNewTags] = useState<string[]>([]);

    const tags = useAppSelector(selectTags);
    const selectedTags = useAppSelector(selectGymTags);

    useEffect(() => {
        if (selectedTags) {
            setNewTags(selectedTags as unknown as string[]);
        }
    }, [selectedTags]);

    useEffect(() => {
        if (tags.length === 0) {
            void dispatch(loadTags());
        }
    }, [dispatch, tags.length]);

    const handleChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>, name: string) => {
            setNewTags((prevState) => {
                let updatedTags: string[];

                if (event.target.checked) {
                    updatedTags = [...prevState, name];
                } else {
                    updatedTags = prevState.filter((prevName) => prevName !== name);
                }

                void dispatch(updateGymAction({ tags: updatedTags }));

                return updatedTags;
            });
        },
        [dispatch]
    );

    const content = useMemo(() => {
        const items: ReactElement[] = [];

        tags.forEach(({ name, id }) => {
            items.push(
                <FormControlLabel
                    key={`tag-checkbox--${id}`}
                    control={
                        <Checkbox
                            id={id}
                            checked={newTags.includes(name)}
                            onChange={(event) => handleChange(event, name)}
                        />
                    }
                    label={name}
                />
            );
        });

        return items;
    }, [handleChange, newTags, tags]);

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
